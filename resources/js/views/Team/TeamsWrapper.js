import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import { indexTeamsAction } from '../../actions/teamsActions';
import PageTitle from "../../components/common/PageTitle";
import { getCookie } from "../../utils/cookies";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import IndexTeams from './IndexTeams';

class Teams extends Component {

  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Teams" subtitle="Teams" className="text-sm-left" />
        </Row>
        <Row noGutters className="py-3">
          <Button tag={Link} to="/teams/create" >add team</Button>
        </Row>
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Teams</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <table className="table mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th scope="col" className="border-0">#ID</th>
                      <th scope="col" className="border-0">Name</th>
                      <th scope="col" className="border-0">actions</th>
                    </tr>
                  </thead>
                  <IndexTeams />
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
  return dispatch(indexTeamsAction(data));
}

export default connect(null, mapDispatchToProps)(Teams);