import { put, call } from 'redux-saga/effects';
import {
     indexCompetitionsService,
     updateCompetitionsService,
     showCompetitionsService,
     storeCompetitionsService,
     destroyCompetitionsService
    } from '../services/competitionsService';

import * as types from '../actions'

export function* indexCompetitionsSaga(payload) {
  try {
    const response = yield call(indexCompetitionsService, payload);
    yield put({ type: types.INDEX_COMPETITION_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.INDEX_COMPETITION_ERROR, error });
  }
}

export function* storeCompetitionsSaga(payload) {
    try {
      const response = yield call(storeCompetitionsService, payload);
      yield put({ type: types.STORE_COMPETITION_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.STORE_COMPETITION_ERROR, error });
    }
}

export function* destroyCompetitionsSaga(payload) {
    try {
      const response = yield call(destroyCompetitionsService, payload);
      yield put({ type: types.DESTROY_COMPETITION_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.DESTROY_COMPETITION_ERROR, error });
    }
}
export function* updateCompetitionsSaga(payload) {
    try {
      const response = yield call(updateCompetitionsService, payload);
      yield put({ type: types.UPDATE_COMPETITION_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.UPDATE_COMPETITION_ERROR, error });
    }
}
export function* showCompetitionsSaga(payload) {
    try {
      const response = yield call(showCompetitionsService, payload);
      yield put({ type: types.SHOW_COMPETITION_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.SHOW_COMPETITION_ERROR, error });
    }
}
