import * as types from './index';

export const indexUsersAction = () => {
    return {
        type: types.INDEX_USER
    }
};

export const storeUsersAction = (data) => {
    return {
        type: types.STORE_USER,
        data
    }
};

export const createUsersAction = () => {
    return {
        type: types.CREATE_USER
    }
}

export const showUsersAction = () => {
    return {
        type: types.SHOW_USER
    }
}

export const updateUsersAction = (data) => {
    return {
        type: types.UPDATE_USER,
        data
    }
}

export const editUsersAction = () => {
    return {
        type: types.EDIT_USER
    }
}

export const destroyUsersAction = (data) => {
    return {
        type: types.DESTROY_USER,
        data
    }
}