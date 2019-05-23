import { combineReducers } from 'redux';
import {
  getUserReducer, registerReducer, loginReducer, logoutReducer
} from './authReducer';
import {
  indexUserReducer, storeUserReducer, showUserReducer, createUserReducer,
  updateUserReducer, editUserReducer, destroyUserReducer,
} from './usersReducer';
import {
  indexCompetitionReducer, storeCompetitionReducer, showCompetitionReducer, createCompetitionReducer,
  updateCompetitionReducer, editCompetitionReducer, destroyCompetitionReducer,
} from './competitionsReducer';
import {
  indexTeamReducer, storeTeamReducer, showTeamReducer, createTeamReducer,
  updateTeamReducer, editTeamReducer, destroyTeamReducer,
} from './teamsReducer';

const rootReducer = combineReducers({
  //Auth reducers
  getUserReducer, registerReducer, loginReducer, logoutReducer,
  //usersCrud reducers
  indexUserReducer, storeUserReducer, showUserReducer, createUserReducer,
  updateUserReducer, editUserReducer, destroyUserReducer,
  //competitionCrud reducers
  indexCompetitionReducer, storeCompetitionReducer, showCompetitionReducer, createCompetitionReducer,
  updateCompetitionReducer, editCompetitionReducer, destroyCompetitionReducer,
  //teamsCrud reducers
  indexTeamReducer, storeTeamReducer, showTeamReducer, createTeamReducer,
  updateTeamReducer, editTeamReducer, destroyTeamReducer,
});

export default rootReducer;