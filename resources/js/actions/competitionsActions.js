import * as types from './index';

export const indexCompetitionsAction = (data) => {
    return {
        type: types.INDEX_COMPETITION,
        data
    }
}

export const storeCompetitionsAction = (data) => {
    return {
        type: types.STORE_COMPETITION,
        data
    }
}

export const showCompetitionsAction = (data) => {
    return {
        type: types.SHOW_COMPETITION,
        data
    }
}

export const updateCompetitionsAction = (data) => {
    return {
        type: types.UPDATE_COMPETITION,
        data
    }
}

export const destroyCompetitionsAction = (data) => {
    return {
        type: types.DESTROY_COMPETITION,
        data
    }
}
