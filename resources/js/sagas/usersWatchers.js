import { takeLatest } from 'redux-saga/effects';
import {
    indexUsersSaga,
    updateUsersSaga,
    showUsersSaga,
    storeUsersSaga,
    destroyUsersSaga
} from './usersSaga';

import * as types from '../actions';

export default function* watchUserCrud() {

    yield takeLatest(types.INDEX_USER, indexUsersSaga);
    yield takeLatest(types.UPDATE_USER, updateUsersSaga);
    yield takeLatest(types.SHOW_USER, showUsersSaga);
    yield takeLatest(types.STORE_USER, storeUsersSaga);
    yield takeLatest(types.DESTROY_USER, destroyUsersSaga);

}
