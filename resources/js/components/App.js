import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./../routes";
import privateRoutes from "./../privateRoutes";
import withTracker from "./../withTracker";
import PrivateRoute from "./../services/PrivateRoute";
import { checkCookie } from "./../utils/cookies";
import { getUserAction } from './../actions/authenticationActions';
import { connect } from 'react-redux';

import "./../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

export class App extends Component {

    componentDidMount() {
        let token = checkCookie();
        if(token !== null) {
            const data = { 
                token
            };
          
            this.props.dispatch(getUserAction(data));
        }
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
                        key={index}
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

const mapStateToProps = (response) => ({
    response
  })
  
  export default connect(mapStateToProps)(App);
  