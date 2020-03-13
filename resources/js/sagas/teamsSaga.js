import { put, call } from 'redux-saga/effects';
import {
     indexTeamsService,
     updateTeamsService,
     showTeamsService,
     storeTeamsService,
     destroyTeamsService
    } from '../services/teamsService';

import * as types from '../actions'

export function* indexTeamsSaga(payload) {
  try {
    const response = yield call(indexTeamsService, payload);
    yield put({ type: types.INDEX_TEAM_SUCCESS, response });
  } catch(error) {
    yield put({ type: types.INDEX_TEAM_ERROR, error });
  }
}

export function* storeTeamsSaga(payload) {
    try {
      const response = yield call(storeTeamsService, payload);
      yield put({ type: types.STORE_TEAM_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.STORE_TEAM_ERROR, error });
    }
}
export function* destroyTeamsSaga(payload) {
    try {
      const response = yield call(destroyTeamsService, payload);
      yield put({ type: types.DESTROY_TEAM_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.DESTROY_TEAM_ERROR, error });
    }
}
export function* updateTeamsSaga(payload) {
    try {
      const response = yield call(updateTeamsService, payload);
      yield put({ type: types.UPDATE_TEAM_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.UPDATE_TEAM_ERROR, error });
    }
}
export function* showTeamsSaga(payload) {
    try {
      const response = yield call(showTeamsService, payload);
      yield put({ type: types.SHOW_TEAM_SUCCESS, response });
    } catch(error) {
      yield put({ type: types.SHOW_TEAM_ERROR, error });
    }
}
