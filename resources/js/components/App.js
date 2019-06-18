// react and installed components
import React, { Component, PureComponent } from "react";
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
                        {routes.map((route) => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    exact
                                    component={withTracker(props => {
                                        return (
                                            <route.layout {...props}>
                                                <route.component {...props} />
                                            </route.layout>
                                        );
                                    })}
                                />
                            )
                        )}
                        {privateRoutes.map((route) => (
                                <PrivateRoute
                                    key={route.path}
                                    path={route.path}
                                    exact
                                    component={withTracker(props => {
                                        return (
                                            <route.layout {...props}>
                                                <route.component {...props} />
                                            </route.layout>
                                        );
                                    })}
                                />
                            )
                        )}
                        {guestRoutes.map((route) => (
                                <GuestRoute
                                    key={route.path}
                                    path={route.path}
                                    exact
                                    component={withTracker(props => {
                                        return (
                                            <route.layout {...props}>
                                                <route.component {...props} />
                                            </route.layout>
                                        );
                                    })}
                                />
                            )
                        )}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default connect()(App);
