// react and installed components
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// shards files
import "./../shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import withTracker from "./../withTracker";

// implemented files
import routes from "../routes/routes";
import privateRoutes from "../routes/privateRoutes";
import guestRoutes from "../routes/guestRoutes";
import PrivateRoute from "./../services/PrivateRoute";
import GuestRoute from "./../services/GuestRoute";
import { checkCookie } from "./../utils/cookies";
import { getUserAction } from './../actions/authenticationActions';


export class App extends Component {

    componentDidMount() {
        let token = checkCookie();
        if (token !== null) {
            const data = {
                token
            };

            this.props.dispatch(getUserAction(data));
        }
    }

    render() {
        return (
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
                                                <route.component {...props} />
                                            </route.layout>
                                        );
                                    })}
                                />
                            );
                        })}
                        {guestRoutes.map((route, index) => {
                            return (
                                <GuestRoute
                                    key={index}
                                    path={route.path}
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
                    </Switch>
                </div>
            </Router>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(getUserAction, dispatch)
    }
}

export default connect(mapDispatchToProps)(App);
