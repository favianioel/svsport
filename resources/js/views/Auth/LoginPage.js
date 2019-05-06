import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "shards-react";
import PageTitle from "../../components/common/PageTitle";

class LoginPage extends Component {
    render () {
        return (
        <Container fluid className='main-content-container px-4 pb-4'>
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="Login" className="text-sm-left" />
            </Row>
            <Row>
            <Col lg="9" md="12">
                Don't have an acount? <Link to='register'>Register here</Link>
            </Col>
            </Row>
        </Container>
        ); 
    }
}

export default LoginPage;
