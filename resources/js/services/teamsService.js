export const indexTeamsService = (request) => {
    const INDEX_TEAM_API_ENDPOINT = 'http://localhost:8000/api/teams';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+request.user.token
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
    const CREATE_TEAM_API_ENDPOINT = 'http://localhost:8000/api/teams/create';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+request.user.token
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
    const SHOW_TEAM_API_ENDPOINT = 'http://localhost:8000/api/teams/{}';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+request.user.token
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
    const STORE_TEAM_API_ENDPOINT = 'http://localhost:8000/api/teams';
    const parameters = {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer '+request.user.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
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
    const EDIT_TEAM_API_ENDPOINT = 'http://localhost:8000/api/teams/{}/edit';
    const parameters = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+request.user.token
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
    const UPDATE_TEAM_API_ENDPOINT = 'http://localhost:8000/api/teams/{}';
    const parameters = {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer '+request.user.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(request.user)
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
    const DESTROY_TEAM_API_ENDPOINT = 'http://localhost:8000/api/teams/{}';
    const parameters = {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer '+request.user.token
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
