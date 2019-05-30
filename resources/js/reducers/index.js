import { combineReducers } from 'redux';
import {
  getUserReducer, registerReducer, loginReducer, logoutReducer
} from './authReducer';
import {
  indexUserReducer, storeUserReducer, showUserReducer,
  updateUserReducer, destroyUserReducer,
} from './usersReducer';
import {
  indexCompetitionReducer, storeCompetitionReducer, showCompetitionReducer,
  updateCompetitionReducer, destroyCompetitionReducer,
} from './competitionsReducer';
import {
  indexTeamReducer, storeTeamReducer, showTeamReducer,
  updateTeamReducer, destroyTeamReducer,
} from './teamsReducer';

const rootReducer = combineReducers({
  //Auth reducers
  getUserReducer, registerReducer, loginReducer, logoutReducer,
  //usersCrud reducers
  indexUserReducer, storeUserReducer, showUserReducer,
  updateUserReducer, destroyUserReducer,
  //competitionCrud reducers
  indexCompetitionReducer, storeCompetitionReducer, showCompetitionReducer,
  updateCompetitionReducer, destroyCompetitionReducer,
  //teamsCrud reducers
  indexTeamReducer, storeTeamReducer, showTeamReducer,
  updateTeamReducer, destroyTeamReducer,
});

export default rootReducer;