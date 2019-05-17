import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import logout from './logoutReducer';
import getUser from './getUserReducer';

const rootReducer = combineReducers({
  register, login, logout, getUser
});

export default rootReducer;