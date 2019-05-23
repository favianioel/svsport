import { takeLatest } from 'redux-saga/effects';
import {
    createUsersSaga,
    indexUsersSaga,
    updateUsersSaga,
    showUsersSaga,
    storeUsersSaga,
    editUsersSaga,
    destroyUsersSaga
} from './usersSaga';

import * as types from '../actions';

export default function* watchUserCrud() {

    yield takeLatest(types.CREATE_USER, createUsersSaga); 
    yield takeLatest(types.INDEX_USER, indexUsersSaga);
    yield takeLatest(types.UPDATE_USER, updateUsersSaga);
    yield takeLatest(types.SHOW_USER, showUsersSaga);
    yield takeLatest(types.STORE_USER, storeUsersSaga);
    yield takeLatest(types.EDIT_USER, editUsersSaga);
    yield takeLatest(types.DESTROY_USER, destroyUsersSaga);

}
