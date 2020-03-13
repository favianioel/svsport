import React, { Component } from 'react';
import { Button, Container, Row, Col } from "shards-react";
import { Link, Redirect } from 'react-router-dom';
import PageTitle from "../../components/common/PageTitle";
import { connect } from 'react-redux';

import { registerUserAction } from '../../actions/authenticationActions';

class RegisterPage extends Component {
    onHandleRegistration = (event) => {
        event.preventDefault();

        let name = event.target.name.value;
        let email = event.target.email.value;
        let password = event.target.password.value;
        let password_confirmation = event.target.password_confirmation.value;

        const data = {
            name, email, password, password_confirmation
        };

        this.props.dispatch(registerUserAction(data));
    }
    render() {
        let message, isSuccess;

        if (this.props.register.hasOwnProperty('response')) {
            isSuccess = this.props.register.response.success;
            message = this.props.register.response.message;
        }

        return (
            <Container fluid className='main-content-container px-4 pb-4'>
                <Row noGutters className="page-header py-4">
                    <PageTitle sm={{ size: 8, order: 2, offset: 2 }} title="Register" className="text-sm-left" />
                </Row>
                <Row>
                    <Col sm={{ size: 8, order: 2, offset: 2 }}>
                        {!isSuccess ? <div>{message}</div> : <Redirect to='login' />}
                        <form onSubmit={this.onHandleRegistration}>
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" type="text" name="name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" type="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" type="password" name="password" />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input className="form-control" type="password" name="password_confirmation" />
                            </div>
                            <div className="form-group">
                                <Button type="submit">Register</Button>
                            </div>
                        </form>
                        Already have account? <Link to='login'>Login here</Link>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        register: state.registerReducer
    }
};

export default connect(mapStateToProps)(RegisterPage);
