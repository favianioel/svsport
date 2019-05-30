import { takeLatest } from 'redux-saga/effects';
import {
    indexTeamsSaga,
    updateTeamsSaga,
    showTeamsSaga,
    storeTeamsSaga,
    destroyTeamsSaga
} from './teamsSaga';

import * as types from '../actions';

export default function* watchTeamCrud() {

    yield takeLatest(types.INDEX_TEAM, indexTeamsSaga);
    yield takeLatest(types.UPDATE_TEAM, updateTeamsSaga);
    yield takeLatest(types.SHOW_TEAM, showTeamsSaga);
    yield takeLatest(types.STORE_TEAM, storeTeamsSaga);
    yield takeLatest(types.DESTROY_TEAM, destroyTeamsSaga);

}
