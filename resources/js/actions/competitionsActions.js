import * as types from './index';

export const indexCompetitionsAction = (user) => {
    return {
        type: types.INDEX_COMPETITION,
        user
    }
};

export const storeCompetitionsAction = (user) => {
    return {
        type: types.STORE_COMPETITION,
        user
    }
};

export const createCompetitionsAction = (user) => {
    return {
        type: types.CREATE_COMPETITION,
        user
    }
}

export const showCompetitionsAction = (user) => {
    return {
        type: types.SHOW_COMPETITION,
        user
    }
}

export const updateCompetitionsAction = (user) => {
    return {
        type: types.UPDATE_COMPETITION,
        user
    }
}

export const editCompetitionsAction = (user) => {
    return {
        type: types.EDIT_COMPETITION,
        user
    }
}

export const destroyCompetitionsAction = (user) => {
    return {
        type: types.DESTROY_COMPETITION,
        user
    }
}
