import React, { Component } from 'react';
import { Container, Row, Col } from "shards-react";
import { Link } from 'react-router-dom';
import PageTitle from "../../components/common/PageTitle";
import { connect } from 'react-redux';

import { registerUserAction } from '../../actions/authenticationActions';

class RegisterPage extends Component {
    onHandleRegistration(event){
        event.preventDefault();

        let name = event.target.name.value;
        let email = event.target.email.value;
        let password = event.target.password.value;

        const data = {
            name, email, password
        };
        this.props.dispatch(registerUserAction(data));
    }
    render() {
        let message, isSucces;

        if (this.props.response.register.hasOwnProperty('response')) {
            isSucces = this.props.response.register.response.success;
            message = this.props.response.register.response.message;
        }

        return(
        <Container fluid className='main-content-container px-4 pb-4'>
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="Register" className="text-sm-left" />
            </Row>
            <Row>
                <Col lg="9" md="12">
                    {!isSuccess ? <div>{message}</div> : browserHistory.push('login')}
            <form onSubmit={this.onHandleRegistration}>
            <div>
                <label>Name</label>
                <input type="text" name="name" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="email" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="password" />
            </div>
            <div>
              <button>Register</button>
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
