import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga, logoutSaga, getUserSaga } from './authenticationSaga';

import * as types from '../actions';

export default function* watchUserAuthentication() {
    yield takeLatest(types.REGISTER_USER, registerSaga);
    yield takeLatest(types.LOGIN_USER, loginSaga);
    yield takeLatest(types.LOGOUT_USER, logoutSaga);
    yield takeLatest(types.GET_USER, getUserSaga);
}
