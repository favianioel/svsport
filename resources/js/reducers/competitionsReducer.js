import * as types from '../actions';

export function indexCompetitionReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.INDEX_COMPETITION_SUCCESS:
        return { ...state, response };
        case types.INDEX_COMPETITION_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function storeCompetitionReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.STORE_COMPETITION_SUCCESS:
        return { ...state, response };
        case types.STORE_COMPETITION_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function showCompetitionReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.SHOW_COMPETITION_SUCCESS:
        return { ...state, response };
        case types.SHOW_COMPETITION_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function createCompetitionReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.CREATE_COMPETITION_SUCCESS:
        return { ...state, response };
        case types.CREATE_COMPETITION_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function updateCompetitionReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.UPDATE_COMPETITION_SUCCESS:
        return { ...state, response };
        case types.UPDATE_COMPETITION_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function editCompetitionReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.EDIT_COMPETITION_SUCCESS:
        return { ...state, response };
        case types.EDIT_COMPETITION_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};

export function destroyCompetitionReducer(state = [], action) {
    const response = action.response;
    switch(action.type) {
        case types.DESTROY_COMPETITION_SUCCESS:
        return { ...state, response };
        case types.DESTROY_COMPETITION_ERROR:
        return { ...state, response };
        default:
        return state;
    }
};
