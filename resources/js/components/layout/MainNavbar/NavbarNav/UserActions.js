import React from "react";
import { Link } from "react-router-dom";
import { getCookie, deleteCookie } from "./../../../../utils/cookies";
import { logoutUserAction } from './../../../../actions/authenticationActions';
import { connect } from 'react-redux';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    this.setState({
      visible: !this.state.visible
    });
  }

  onHandleLogout = (event) => {
    event.preventDefault();
    let token = getCookie('token');
    const data = { 
      token
    };

    this.props.dispatch(logoutUserAction(data));
  }


  render() {
    let isSuccess;
    console.log(this.props.response);
    if (this.props.response.logoutReducer.hasOwnProperty('response')) {
        isSuccess = this.props.response.logoutReducer.response.success;
        if (isSuccess) {
          deleteCookie('token');
          window.location.reload();
        }
    }
    return (
      <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
        <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
          <img
            className="user-avatar rounded-circle mr-2"
            src={require("./../../../../images/avatars/3.jpg")}
            alt="User Avatar"
          />{" "}
          <span className="d-none d-md-inline-block">
          { _.size(this.props.response.getUserReducer) > 0 &&
          this.props.response.getUserReducer.response.name
          }
          </span>
        </DropdownToggle>
        <Collapse tag={DropdownMenu} right small open={this.state.visible}>
          <DropdownItem tag={Link} to="user-profile">
            <i className="material-icons">&#xE7FD;</i> Profile
          </DropdownItem>
          {/* <DropdownItem tag={Link} to="edit-user-profile">
            <i className="material-icons">&#xE8B8;</i> Edit Profile
          </DropdownItem> */}
          {/* <DropdownItem tag={Link} to="file-manager-list">
            <i className="material-icons">&#xE2C7;</i> Files
          </DropdownItem> */}
          {/* <DropdownItem tag={Link} to="transaction-history">
            <i className="material-icons">&#xE896;</i> Transactions
          </DropdownItem> */}
          <DropdownItem divider />
          <DropdownItem onClick={this.onHandleLogout} className="text-danger">
            <i className="material-icons text-danger">&#xE879;</i> Logout
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}

const mapStateToProps = (response) => ({
  response
})

export default connect(mapStateToProps)(UserActions);
