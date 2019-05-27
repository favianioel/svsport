import { host } from './envService';

export const indexUsersService = (data) => {
    const INDEX_USER_API_ENDPOINT = host+'/api/users';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+ data.user.token
      }
    };
  
    return fetch(INDEX_USER_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const createUsersService = (data) => {
    const CREATE_USER_API_ENDPOINT = host+'/api/users/create';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + data.user.token
      }
    };
  
    return fetch(CREATE_USER_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const showUsersService = (data) => {
    const SHOW_USER_API_ENDPOINT = host+'/api/users/{}';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    };
  
    return fetch(SHOW_USER_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const storeUsersService = (data) => {
    const STORE_USER_API_ENDPOINT = host+'/api/users';
    const parameters = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + data.user.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data.user)
    };
  
    return fetch(STORE_USER_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const editUsersService = (data) => {
    const EDIT_USER_API_ENDPOINT = host+'/api/users/{}/edit';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + data.user.token
      }
    };
  
    return fetch(EDIT_USER_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const updateUsersService = (data) => {
    const UPDATE_USER_API_ENDPOINT = host+'/api/users/{}';
    const parameters = {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer ' + data.user.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data.user)
    };
  
    return fetch(UPDATE_USER_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const destroyUsersService = (data) => {
    const DESTROY_USER_API_ENDPOINT = host+'/api/users/{}';
    const parameters = {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + data.user.token
      }
    };
  
    return fetch(DESTROY_USER_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };