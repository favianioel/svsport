import { host } from './envService';

export const indexUsersService = (request) => {
    const INDEX_USER_API_ENDPOINT = host+'/api/users';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+ request.data.token
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

  export const showUsersService = (request) => {
    const SHOW_USER_API_ENDPOINT = host+'/api/users/{}';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + request.data.token
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

  export const storeUsersService = (request) => {
    const STORE_USER_API_ENDPOINT = host+'/api/users';
    const parameters = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + request.data.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.data)
    };
  
    return fetch(STORE_USER_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const updateUsersService = (request) => {
    const UPDATE_USER_API_ENDPOINT = host+'/api/users/{}';
    const parameters = {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer ' + request.data.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.data)
    };
  
    return fetch(UPDATE_USER_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const destroyUsersService = (request) => {
    const DESTROY_USER_API_ENDPOINT = host+'/api/users/{}';
    const parameters = {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + request.data.token
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