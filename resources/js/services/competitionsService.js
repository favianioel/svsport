import { host } from './envService';

export const indexCompetitionsService = (request) => {
    const INDEX_COMPETITION_API_ENDPOINT = host+'/api/competitions';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+request.user.token
      }
    };
  
    return fetch(INDEX_COMPETITION_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const createCompetitionsService = (request) => {
    const CREATE_COMPETITION_API_ENDPOINT = host+'/api/competitions/create';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+request.user.token
      }
    };
  
    return fetch(CREATE_COMPETITION_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const showCompetitionsService = (request) => {
    const SHOW_COMPETITION_API_ENDPOINT = host+'/api/competitions/{}';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+request.user.token
      }
    };
  
    return fetch(SHOW_COMPETITION_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const storeCompetitionsService = (request) => {
    const STORE_COMPETITION_API_ENDPOINT = host+'/api/competitions';
    const parameters = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer '+request.user.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
    };
  
    return fetch(STORE_COMPETITION_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const editCompetitionsService = (request) => {
    const EDIT_COMPETITION_API_ENDPOINT = host+'/api/competitions/{}/edit';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+request.user.token
      }
    };
  
    return fetch(EDIT_COMPETITION_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const updateCompetitionsService = (request) => {
    const UPDATE_COMPETITION_API_ENDPOINT = host+'/api/competitions/{}';
    const parameters = {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer '+request.user.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
    };
  
    return fetch(UPDATE_COMPETITION_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const destroyCompetitionsService = (request) => {
    const DESTROY_COMPETITION_API_ENDPOINT = host+'/api/competitions/{}';
    const parameters = {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer '+request.user.token
      }
    };
  
    return fetch(DESTROY_COMPETITION_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };
