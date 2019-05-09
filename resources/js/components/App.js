import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./../routes";
import privateRoutes from "./../privateRoutes";
import withTracker from "./../withTracker";
import PrivateRoute from "./../services/PrivateRoute";

import "./../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
    }
    
    render() {
        return(
        <Router basename={process.env.REACT_APP_BASENAME || ""}>
         <div>
            <Switch>
                {routes.map((route, index) => {
                    return (
                        <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={withTracker(props => {
                            return (
                            <route.layout {...props}>
                            <route.component {...props} />
                            </route.layout>
                            );
                        })}
                        />
                    );
                })}
                {privateRoutes.map((route, index) => {
                    return (
                        <PrivateRoute
                        path={route.path}
                        component={withTracker(props => {
                            return (
                                <route.layout {...props}>
                                <route.component {...props}/>
                                </route.layout>
                            );
                        })}
                        />
                    );
                })}
            </Switch>
        </div>
        </Router>
        );
    }
} 
