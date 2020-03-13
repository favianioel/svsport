import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import { indexCompetitionsAction } from '../../actions/competitionsActions';
import PageTitle from "../../components/common/PageTitle";
import IndexCompetitions from './IndexCompetitions';
import { getCookie } from "../../utils/cookies";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Competitions extends React.Component {
  render() {
    let isSuccess;
    if (_.size(this.props.response) > 0)
      if (this.props.competitions.hasOwnProperty('response')) {
        isSuccess = true;
      }

    return (
      <Container fluid className="main-content-container px-4 pb-4">
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Competitions" subtitle="Competitions" className="text-sm-left" />
        </Row>
        <Row noGutters className="py-3">
          <Button tag={Link} to="/competitions/create" >add competition</Button>
        </Row>
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">Competitions</h6>
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
                  <IndexCompetitions />
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
  return dispatch(indexCompetitionsAction(data));
}

export default connect(null, mapDispatchToProps)(Competitions);