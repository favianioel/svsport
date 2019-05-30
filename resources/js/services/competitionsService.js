import { host } from './envService';

export const indexCompetitionsService = (request) => {
    const INDEX_COMPETITION_API_ENDPOINT = host+'/api/competitions';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+request.data.token
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


  export const showCompetitionsService = (request) => {
    const SHOW_COMPETITION_API_ENDPOINT = host+'/api/competitions/'+request.data.id;
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+request.data.token
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
        'Authorization': 'Bearer '+request.data.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.data)
    };
  
    return fetch(STORE_COMPETITION_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const updateCompetitionsService = (request) => {
    const UPDATE_COMPETITION_API_ENDPOINT = host+'/api/competitions/'+request.data.id;
    const parameters = {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer '+request.data.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.data)
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
    const DESTROY_COMPETITION_API_ENDPOINT = host+'/api/competitions/'+request.data.id;
    const parameters = {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer '+request.data.token
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
