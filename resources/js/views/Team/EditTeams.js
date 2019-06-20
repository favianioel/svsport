import React, { Component } from 'react';
import { Container, Row, Form, FormInput, FormGroup, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import { connect } from "react-redux";
import Select from 'react-select';

class EditTeams extends Component {
    componentDidMount() {
        console.log(this.props.match.params); 
    }
    render() {
        return (
            <Container fluid className="main-content-container px-4 pb-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Edit Team" subtitle="Teams" className="text-sm-left" />
                </Row>
                <Row>
                    <Col>
                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                <h6 className="m-0">Team</h6>
                            </CardHeader>

                            <CardBody className="p-0 pb-3">
                                <Col sm="12" lg="6">
                                    <Form onSubmit={this.onHandleSubmit}>
                                        <FormGroup>
                                            <br />
                                            <label htmlFor="#name">Name the team</label>
                                            <FormInput id="#name" placeholder="Name" name="name" />
                                            <br />
                                            <Button>create</Button>
                                        </FormGroup>
                                    </Form>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect()(EditTeams);
