import { takeLatest } from 'redux-saga/effects';
import {
    indexCompetitionsSaga,
    updateCompetitionsSaga,
    showCompetitionsSaga,
    storeCompetitionsSaga,
    destroyCompetitionsSaga
} from './competitionsSaga';

import * as types from '../actions';

export default function* watchCompetitionCrud() {

    yield takeLatest(types.INDEX_COMPETITION, indexCompetitionsSaga);
    yield takeLatest(types.UPDATE_COMPETITION, updateCompetitionsSaga);
    yield takeLatest(types.SHOW_COMPETITION, showCompetitionsSaga);
    yield takeLatest(types.STORE_COMPETITION, storeCompetitionsSaga);
    yield takeLatest(types.DESTROY_COMPETITION, destroyCompetitionsSaga); 
}
