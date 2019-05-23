export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = 'http://localhost:8000/api/register';
  
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = 'http://localhost:8000/api/login';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const getUserService = (request) => {
  const GET_USER_API_ENDPOINT = 'http://localhost:8000/api/user-session';
  const parameters = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer '+request.user.token
    }
  };

  return fetch(GET_USER_API_ENDPOINT, parameters).then(response => {
    return response.json();
  }).then(json => {
    return json;
  })
};

export const logoutUserService = (request) => {
  const LOGOUT_API_ENDPOINT = 'http://localhost:8000/api/logout';
  const parameters = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer '+request.user.token
    }
  };

  return fetch(LOGOUT_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    })
};