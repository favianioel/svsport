import * as types from './index';

export const indexTeamsAction = (user) => {
    return {
        type: types.INDEX_TEAM,
        user
    }
};

export const storeTeamsAction = (user) => {
    return {
        type: types.STORE_TEAM,
        user
    }
};

export const createTeamsAction = (user) => {
    return {
        type: types.CREATE_TEAM,
        user
    }
}

export const showTeamsAction = (user) => {
    return {
        type: types.SHOW_TEAM,
        user
    }
}

export const updateTeamsAction = (user) => {
    return {
        type: types.UPDATE_TEAM,
        user
    }
}

export const editTeamsAction = (user) => {
    return {
        type: types.EDIT_TEAM,
        user
    }
}

export const destroyTeamsAction = (user) => {
    return {
        type: types.DESTROY_TEAM,
        user
    }
}
