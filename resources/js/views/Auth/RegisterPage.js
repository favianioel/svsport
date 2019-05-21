import React, { Component } from 'react';
import { Container, Row, Col } from "shards-react";
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

        if (this.props.response.register.hasOwnProperty('response')) {
            isSuccess = this.props.response.register.response.success;
            message = this.props.response.register.response.message;
        }

        return(
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
                            <button type="submit" className="mb-2 btn-outline-primary mr-2">Register</button>
                        </div>
                    </form>
                    Already have account? <Link to='login'>Login here</Link>
                </Col>
            </Row>
        </Container>
        )
    }
}

const mapStateToProps = (response) => ({
    response
});
export default connect(mapStateToProps)(RegisterPage);
