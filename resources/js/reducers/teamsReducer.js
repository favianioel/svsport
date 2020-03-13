import * as types from '../actions';

export function indexTeamReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.INDEX_TEAM_SUCCESS:
        return { ...state, response };
        case types.INDEX_TEAM_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function storeTeamReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.STORE_TEAM_SUCCESS:
        return { ...state, response };
        case types.STORE_TEAM_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function showTeamReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.SHOW_TEAM_SUCCESS:
        return { ...state, response };
        case types.SHOW_TEAM_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function updateTeamReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.UPDATE_TEAM_SUCCESS:
        return { ...state, response };
        case types.UPDATE_TEAM_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function destroyTeamReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.DESTROY_TEAM_SUCCESS:
        return { ...state, response };
        case types.DESTROY_TEAM_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};
