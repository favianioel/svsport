import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import logout from './logoutReducer';

const rootReducer = combineReducers({
  register, login, logout
});

export default rootReducer;