import { fork} from 'redux-saga/effects';
import watchUserAuthentication from './watchers';

// I simply export a generator function and fork the watchUserAuthentication
// read about js generators -> https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5
export default function* startSupervisor() {
    yield fork(watchUserAuthentication);
}
