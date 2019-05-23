import * as types from '../actions';

export function indexUserReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.INDEX_USER_SUCCESS:
        return { ...state, response };
        case types.INDEX_USER_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function storeUserReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.STORE_USER_SUCCESS:
        return { ...state, response };
        case types.STORE_USER_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function showUserReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.SHOW_USER_SUCCESS:
        return { ...state, response };
        case types.SHOW_USER_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function createUserReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.CREATE_USER_SUCCESS:
        return { ...state, response };
        case types.CREATE_USER_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function updateUserReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.UPDATE_USER_SUCCESS:
        return { ...state, response };
        case types.UPDATE_USER_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function editUserReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.EDIT_USER_SUCCESS:
        return { ...state, response };
        case types.EDIT_USER_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function destroyUserReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.DESTROY_USER_SUCCESS:
        return { ...state, response };
        case types.DESTROY_USER_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};