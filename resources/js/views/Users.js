import React from "react";
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import { indexUsersAction } from '../actions/usersActions';

class Users extends React.Component {
  componentDidMount() {
    debugger;
    console.log(this.props)
    this.props.dispatch(indexUsersAction());
  }

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
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ali</td>
                    <td>Kerry@mail.com</td>
                    <td>Admin</td>
                    <td>
                      <button style={{ fontSize: 15, color: 'blue', padding: '2 5 2 5', margin: 3 }}>
                        <i className="fas fa-eye"></i>
                      </button>
                      <button style={{ fontSize: 15, color: 'green', padding: '2 5 2 5', margin: 3 }}>
                        <i className="fas fa-edit"></i>
                      </button>
                      <button style={{ fontSize: 15, color: 'red', padding: '2 5 2 5', margin: 3 }}>
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.indexUsersReducer
  }
}
export default connect(mapStateToProps)(Users);