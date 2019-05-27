import React, { Component } from "react";
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import PageTitle from "../../components/common/PageTitle";
import { indexUsersAction } from '../../actions/usersActions';
import IndexUsers from './IndexUsers';
import { getCookie } from "../../utils/cookies";

class Users extends Component {

    render() {
        return (
            <Container fluid className="main-content-container px-4 pb-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Users" subtitle="Users" className="text-sm-left" />
                </Row>
                <Row>
                    <Col>
                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                <h6 className="m-0">Active Users</h6>
                            </CardHeader>
                            <CardBody className="p-0 pb-3">
                                <table className="table mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-0">#ID</th>
                                            <th scope="col" className="border-0">Name</th>
                                            <th scope="col" className="border-0">Email</th>
                                            <th scope="col" className="border-0">Role</th>
                                            <th scope="col" className="border-0">actions</th>
                                        </tr>
                                    </thead>
                                    <IndexUsers />
                                </table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}


const mapDispatchToProps = dispatch => {
    const token = getCookie('token');
    const data = {
        token
    };
    return dispatch(indexUsersAction(data));
}

export default connect(null, mapDispatchToProps)(Users);