import * as types from '../actions';

export function getUserReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.GET_USER_SUCCESS:
        return { ...state, response };
        case types.GET_USER_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function loginReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.LOGIN_USER_SUCCESS:
        return { ...state, response };
        case types.LOGIN_USER_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function logoutReducer(state = [], action) {
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

export function registerReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
      case types.REGISTER_USER_SUCCESS:
        return { ...state, response };
      case types.REGISTER_USER_ERROR:
        return { ...state, response };
      default:
        return state;
    }
}