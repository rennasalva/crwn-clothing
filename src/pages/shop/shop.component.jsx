import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollections} from './../../redux/shop/shop.selector'
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {Route} from "react-router-dom";
import {
    firestore,
    convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import {updateCollections} from './../../redux/shop/shop.actions'
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    unsubscribeFromSnapshot = null;
    //anche senza costruttore
    state = {
        loading: true
    };


    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections');
        /*
        //modalita con listener di firestore
        collectionRef.onSnapshot(async (snapshot)=>{
            const collectionMaps = convertCollectionsSnapshottomap(snapshot);
            updateCollections(collectionMaps);
            console.log('collectionMaps',collectionMaps);
            this.setState({
                loading : false
            })
        });
        */

        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });

    }

    render(){
        const {collections,match} = this.props
        const { loading } = this.state;
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={props=>(<CollectionOverviewWithSpinner isLoading={loading} {...props} />)}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={props=>(<CollectionPageWithSpinner isLoading={loading} {...props} />)}
                />
            </div>
        )
    }

    /*

    render(){
        const {collections,match} = this.props
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }

   return (
            <div className="shop-page">
                {
                    collections.map(({id,...otherCollectionPropos})=>(
                        <CollectionPreview key={id} {...otherCollectionPropos} />
                    ))
                }
            </div>
        )*/
}

const mapStateToProps = (state)=>({
    collections: selectCollections(state)
})

const mapDispatchToProps = (dispatch) =>({
    updateCollections : (collectionsMap) => dispatch(updateCollections(collectionsMap))
});

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);