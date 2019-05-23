import { takeLatest } from 'redux-saga/effects';
import {
    createTeamsSaga,
    indexTeamsSaga,
    updateTeamsSaga,
    showTeamsSaga,
    storeTeamsSaga,
    editTeamsSaga,
    destroyTeamsSaga
} from './teamsSaga';

import * as types from '../actions';

export default function* watchTeamCrud() {

    yield takeLatest(types.CREATE_TEAM, createTeamsSaga); 
    yield takeLatest(types.INDEX_TEAM, indexTeamsSaga);
    yield takeLatest(types.UPDATE_TEAM, updateTeamsSaga);
    yield takeLatest(types.SHOW_TEAM, showTeamsSaga);
    yield takeLatest(types.STORE_TEAM, storeTeamsSaga);
    yield takeLatest(types.EDIT_TEAM, editTeamsSaga);
    yield takeLatest(types.DESTROY_TEAM, destroyTeamsSaga);

}
