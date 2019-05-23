import { put, call } from 'redux-saga/effects';
import {
     createUsersService,
     indexUsersService,
     updateUsersService,
     showUsersService,
     storeUsersService,
     editUsersService,
     destroyUsersService
    } from '../services/usersService';

import * as types from '../actions'

export function* indexUsersSaga(payload) {
  try {
    const response = yield call(indexUsersService, payload);
    yield put({ type: types.INDEX_USER_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.INDEX_USER_ERROR, error });
  }
}

export function* storeUsersSaga(payload) {
    try {
      const response = yield call(storeUsersService, payload);
      yield put({ type: types.STORE_USER_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.STORE_USER_ERROR, error });
    }
}

export function* createUsersSaga(payload) {
    try {
      const response = yield call(createUsersService, payload);
      yield put({ type: types.CREATE_USER_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.CREATE_USER_ERROR, error });
    }
}

export function* destroyUsersSaga(payload) {
    try {
      const response = yield call(destroyUsersService, payload);
      yield put({ type: types.DESTROY_USER_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.DESTROY_USER_ERROR, error });
    }
}
export function* updateUsersSaga(payload) {
    try {
      const response = yield call(updateUsersService, payload);
      yield put({ type: types.UPDATE_USER_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.UPDATE_USER_ERROR, error });
    }
}
export function* showUsersSaga(payload) {
    try {
      const response = yield call(showUsersService, payload);
      yield put({ type: types.SHOW_USER_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.SHOW_USER_ERROR, error });
    }
}
export function* editUsersSaga(payload) {
    try {
      const response = yield call(editUsersService, payload);
      yield put({ type: types.EDIT_USER_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.EDIT_USER_ERROR, error });
    }
}
