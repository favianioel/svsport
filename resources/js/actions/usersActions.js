import * as types from './index';

export const indexUsersAction = (user) => {
    return {
        type: types.INDEX_USER,
        user
    }
};

export const storeUsersAction = (user) => {
    return {
        type: types.STORE_USER,
        user
    }
};

export const createUsersAction = (user) => {
    return {
        type: types.CREATE_USER,
        user
    }
}

export const showUsersAction = (user) => {
    return {
        type: types.SHOW_USER,
        user
    }
}

export const updateUsersAction = (user) => {
    return {
        type: types.UPDATE_USER,
        data
    }
}

export const editUsersAction = (user) => {
    return {
        type: types.EDIT_USER,
        user
    }
}

export const destroyUsersAction = (user) => {
    return {
        type: types.DESTROY_USER,
        user
    }
}