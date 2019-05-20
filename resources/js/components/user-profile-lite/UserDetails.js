import React from "react";
import { connect } from 'react-redux'; 
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col
} from "shards-react";

class UserDetails extends React.Component {
  render () {
    let user;
    let check = false;
    if (this.props.response.getUser.hasOwnProperty('response')) {
      check = true;
      user = this.props.response.getUser.response;
    }
    return (
      <Card small className="mb-4 pt-3">
      <div className="card-body">
      <h4 className="mb-0">Name: {check ? user.name : ''}</h4>
      <h4 className="mb-0">Role: {check ? user.roles : ''}</h4>
      <h4>Email: {check ? user.email : ''}</h4>
      </div>
    </Card>
    ); 
  }
}

const mapStateToProps = (response) => ({
  response
})

export default connect(mapStateToProps)(UserDetails);