import { put, call } from 'redux-saga/effects';
import { registerUserService, loginUserService, logoutUserService, getUserService } from '../services/authenticationService';

import * as types from '../actions'

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield put({ type: types.REGISTER_USER_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield put({ type: types.LOGIN_USER_SUCCESS, response});
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR})
  }
}

export function* logoutSaga(payload) {
  try {
    const response = yield call(logoutUserService, payload);
    yield put({ type: types.LOGOUT_USER_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.LOGOUT_USER_ERROR, error });
  }
}

export function* getUserSaga(payload) {
  try {
    const response = yield call(getUserService, payload);
    yield put({ type: types.GET_USER_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.GET_USER_ERROR })
  }
}