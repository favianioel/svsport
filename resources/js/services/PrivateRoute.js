import React from 'react';  
import { Redirect, Route } from 'react-router-dom';
import { checkCookie } from '../utils/cookies';

const PrivateRoute = (route) => (  
  <Route path={route.path} render={ props => (

    checkCookie() !== null ? (
      <route.component {...props} routes={route.routes}/>
    ) : (
      <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}
      />
    )
  )} />
);

export default PrivateRoute;