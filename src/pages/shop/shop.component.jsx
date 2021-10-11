import React,{useEffect} from "react";
import {useDispatch} from "react-redux";
import {selectCollections} from './../../redux/shop/shop.selector'
import CollectionPage from "../collection/collection.component";
import {Route} from "react-router-dom";
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';



const  ShopPage = ({match})=>{

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch]);

    return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    component ={CollectionsOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </div>
        )

}

/*
const mapDispatchToProps = (dispatch) =>({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null,mapDispatchToProps)(ShopPage);
*/

export default ShopPage;