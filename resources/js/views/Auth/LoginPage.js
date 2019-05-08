import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Container, Row, Col } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import { loginUserAction } from '../../actions/authenticationActions';
import { setCookie } from '../../utils/cookies';

class LoginPage extends Component {

    onHandleLogin = (event) => {
        event.preventDefault();
    
        let email = event.target.email.value;
        let password = event.target.password.value;
    
        const data = {
          email, password
        };
    
        this.props.dispatch(loginUserAction(data));
    }

    render () {
        let isSuccess, message;
        if (this.props.response.login.hasOwnProperty('response')) {
            isSuccess = this.props.response.login.response.success;
            message = this.props.response.login.response.message;

            if (isSuccess) {
                setCookie('token', this.props.response.login.response.token, 1);
            }
        }

        return (
        <Container fluid className='main-content-container px-4 pb-4'>
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="Login" className="text-sm-left" />
            </Row>

            <Row>
            <Col lg="9" md="12">
            {!isSuccess ? <div>{message}</div> : <Redirect to='dashboard' />}
            <form onSubmit={this.onHandleLogin}>
                <div className="form-group">
                    <label>email</label>
                    <input className="form-control" type="email" name="email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input className="form-control" type="password" name="password" />
                </div>
                <div className="form-group">
                    <button type="submit" className="mb-2 btn-outline-primary mr-2">Login</button>
                </div>
            </form>
                Don't have an acount? <Link to='register'>Register here</Link>
            </Col>
            </Row>

        </Container>
        ); 
    }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);
