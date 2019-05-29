import { host } from './envService';

export const indexTeamsService = (request) => {
    const INDEX_TEAM_API_ENDPOINT = host+'/api/teams';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+request.data.token
      }
    };
  
    return fetch(INDEX_TEAM_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const createTeamsService = (request) => {
    const CREATE_TEAM_API_ENDPOINT = host+'/api/teams/create';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+request.data.token
      }
    };
  
    return fetch(CREATE_TEAM_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const showTeamsService = (request) => {
    const SHOW_TEAM_API_ENDPOINT = host+'/api/teams/'+request.data.id;
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+request.data.token
      }
    };
  
    return fetch(SHOW_TEAM_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const storeTeamsService = (request) => {
    const STORE_TEAM_API_ENDPOINT = host+'/api/teams';
    const parameters = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer '+ request.data.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.data)
    };
  
    return fetch(STORE_TEAM_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const editTeamsService = (request) => {
    const EDIT_TEAM_API_ENDPOINT = host+'/api/teams/'+request.data.id+'/edit';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+request.data.token
      }
    };
  
    return fetch(EDIT_TEAM_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const updateTeamsService = (request) => {
    const UPDATE_TEAM_API_ENDPOINT = host+'/api/teams/'+request.data.id;
    const parameters = {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer '+request.data.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.data)
    };
  
    return fetch(UPDATE_TEAM_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };

  export const destroyTeamsService = (request) => {
    const DESTROY_TEAM_API_ENDPOINT = 'http://localhost:8000/api/teams/'+request.data.id;
    const parameters = {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer '+request.data.token
      }
    };
  
    return fetch(DESTROY_TEAM_API_ENDPOINT, parameters)
      .then(response => {
        return response.json();
      })
      .then(json => {
        return json;
      })
  };
