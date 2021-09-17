import React from "react";
import {connect} from "react-redux";
import './collections-overview.styles.scss';
import {selectCollections,selectCollectionsForPreview} from './../../redux/shop/shop.selector'
import CollectionPreview from "../collection-preview/collection-preview.component";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionsOverview = ({collections}) => (
    <div className='collection-overview'>
        {
            collections.map(({id,...otherCollectionPropos})=>(
                <CollectionPreview key={id} {...otherCollectionPropos} />
            ))
        }
    </div>
)

const mapStatetoProps = (state)=>(
    {
        collections : selectCollectionsForPreview(state)
    }
)

export default  connect(mapStatetoProps)(CollectionsOverview)