import * as types from '../actions';

export default function(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.LOGOUT_USER_SUCCESS:
      return { ...state, response };
    case types.LOGOUT_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};