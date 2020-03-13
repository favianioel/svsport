import * as types from './index';

export const indexTeamsAction = (data) => {
    return {
        type: types.INDEX_TEAM,
        data
    }
};

export const storeTeamsAction = (data) => {
    return {
        type: types.STORE_TEAM,
        data
    }
};

export const showTeamsAction = (data) => {
    return {
        type: types.SHOW_TEAM,
        data
    }
}

export const updateTeamsAction = (data) => {
    return {
        type: types.UPDATE_TEAM,
        data
    }
}

export const destroyTeamsAction = (data) => {
    return {
        type: types.DESTROY_TEAM,
        data
    }
}
