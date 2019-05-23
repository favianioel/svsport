import {getCookie} from '../utils/cookies';

const token = getCookie('token');

export const indexUsersService = () => {
    const INDEX_USER_API_ENDPOINT = 'http://localhost:8000/api/users';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+ token
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

  export const createUsersService = () => {
    const CREATE_USER_API_ENDPOINT = 'http://localhost:8000/api/users/create';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
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

  export const showUsersService = () => {
    const SHOW_USER_API_ENDPOINT = 'http://localhost:8000/api/users/{}';
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

  export const storeUsersService = (request) => {
    const STORE_USER_API_ENDPOINT = 'http://localhost:8000/api/users';
    const parameters = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
    };
  
    return fetch(STORE_USER_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const editUsersService = () => {
    const EDIT_USER_API_ENDPOINT = 'http://localhost:8000/api/users/{}/edit';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
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

  export const updateUsersService = (request) => {
    const UPDATE_USER_API_ENDPOINT = 'http://localhost:8000/api/users/{}';
    const parameters = {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
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
    const DESTROY_USER_API_ENDPOINT = 'http://localhost:8000/api/users/{}';
    const parameters = {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + token
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