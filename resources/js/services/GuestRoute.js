import React from "react";
import { Redirect, Route } from 'react-router-dom';
import { checkCookie } from "../utils/cookies";

const GuestRoute = ({ component: Component, ...rest}) => (
    <Route { ...rest } render={props => (
        checkCookie() === null ? (
            <Component { ...props } />
        ) : (
            <Redirect to={{
                pathname: '/user-profile',
                state: { from: props.location }
            }}
            />
        )
    )} />
);

export default GuestRoute;