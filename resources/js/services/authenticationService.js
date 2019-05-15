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

export const logoutUserService = (request) => {
  const LOGOUT_API_ENDPOINT = 'http://localhost:8000/api/logout';
  console.log(request.user);
  const parameters = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer'
    },
    body: JSON.stringify(request.user)
  };

  return fetch(LOGOUT_API_ENDPOINT, parameters)
    .then(response => {
      return response.json;
    })
    .then(json => {
      return json;
    })
};