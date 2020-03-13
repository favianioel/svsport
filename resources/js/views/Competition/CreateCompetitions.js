import { Container, Row, Form, FormInput, FormGroup, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import { storeCompetitionsAction } from '../../actions/competitionsActions';
import PageTitle from "../../components/common/PageTitle";
import { getCookie } from "../../utils/cookies";
import React, { Component } from "react";
import { connect } from "react-redux";

class CreateCompetitions extends Component {

    onHandleSubmit = (event) => {
        event.preventDefault();

        let name = event.target.name.value;
        const token = getCookie('token');
        const data = {
            name, token
        };
        this.props.dispatch(storeCompetitionsAction(data));
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4 pb-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Add Competition" subtitle="Competitions" className="text-sm-left" />
                </Row>
                <Row>
                    <Col>
                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                <h6 className="m-0">Competition</h6>
                            </CardHeader>
                            
                            <CardBody className="p-0 pb-3">
                                <Col sm="12" lg="6">
                                    <Form onSubmit={this.onHandleSubmit}>
                                        <FormGroup>
                                            <br />
                                            <label htmlFor="#name">Name the Competition</label>
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
        );
    }
}



export default connect()(CreateCompetitions)