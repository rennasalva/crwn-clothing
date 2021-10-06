import {takeEvery,takeLatest,call,put,all} from 'redux-saga/effects';
import {ShopActionTypes} from './shop.types';
import {fetchCollectionsSuccess,fetchCollectionsFailure} from '../../redux/shop/shop.actions';
import {firestore,convertCollectionsSnapshotToMap} from './../../firebase/firebase.utils'


export function* fetchCollectionsAsync(){
    try{
        const collectionRef    = firestore.collection('collections');
        const snapshot         = yield collectionRef.get();
        const collections      = yield call(convertCollectionsSnapshotToMap,snapshot);
        yield put(fetchCollectionsSuccess(collections));
    }
    catch (error){
        yield put(fetchCollectionsFailure(error.message));
    }

}

export function* OnfetchCollectionsStart(){
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    )
}


export function* shopSagas(){
    yield all([call(OnfetchCollectionsStart)]);
}