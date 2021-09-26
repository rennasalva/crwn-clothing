import {createSelector} from "reselect";
import memoize from 'lodash.memoize';

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
}

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);


export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);




export const selectCollection = memoize((collectionUrlParam) => {
    return createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : null

    )
});



export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);



export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);

/*
export const selectCollection = (collectionUrlParam) => {
    return createSelector(
        [selectCollections],
        collections =>
            collections.find(collection =>collection.id == COLLECTION_ID_MAP[collectionUrlParam])
    )
}
*/


/**
 Memoize does the same idea of memoization as reselect does for our selectors, except this time we're memoizing the return of our function which returns our selector:
 */


/*
quando era configrata come array
export const selectCollection = memoize((collectionUrlParam) => {
    return createSelector(
        [selectCollections],
        collections =>
            collections.find(collection =>collection.id == COLLECTION_ID_MAP[collectionUrlParam])
    )
});
*/






