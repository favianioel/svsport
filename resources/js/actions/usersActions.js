import * as types from './index';

export const indexUsersAction = (data) => {
    return {
        type: types.INDEX_USER,
        data
    }
};

export const storeUsersAction = (data) => {
    return {
        type: types.STORE_USER,
        data
    }
};

export const createUsersAction = (data) => {
    return {
        type: types.CREATE_USER,
        data
    }
}

export const showUsersAction = (data) => {
    return {
        type: types.SHOW_USER,
        data
    }
}

export const updateUsersAction = (data) => {
    return {
        type: types.UPDATE_USER,
        data
    }
}

export const editUsersAction = (data) => {
    return {
        type: types.EDIT_USER,
        data
    }
}

export const destroyUsersAction = (data) => {
    return {
        type: types.DESTROY_USER,
        data
    }
}