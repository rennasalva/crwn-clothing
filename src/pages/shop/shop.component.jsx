import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCollections} from './../../redux/shop/shop.selector'
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {Route} from "react-router-dom";

const ShopPage = ({collections,match})=>{
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
        /*return (
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

export default connect(mapStateToProps)(ShopPage);