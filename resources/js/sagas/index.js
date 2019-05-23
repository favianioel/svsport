import { fork} from 'redux-saga/effects';
import watchUserAuthentication from './authenticationWatchers';
import watchUserCrud from './usersWatchers';
import watchTeamCrud from './teamsWatchers';
import watchCompetitionCrud from './competitionsWatchers';

// I simply export a generator function and fork the watchUserAuthentication
// read about js generators -> https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5
export default function* startSupervisor() {
    yield fork(watchUserAuthentication);
    yield fork(watchUserCrud);
    yield fork(watchTeamCrud);
    yield fork(watchCompetitionCrud);
}
