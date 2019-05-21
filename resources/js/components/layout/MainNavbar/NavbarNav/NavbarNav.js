import React from "react";
import { Nav, NavItem, NavLink} from "shards-react";
import { Link } from 'react-router-dom';

import Notifications from "./Notifications";
import UserActions from "./UserActions";


export default () => (
  <Nav navbar className="border-left flex-row">

    {/* <Notifications /> */}

    <UserActions />

    {/* <NavItem className="border-right dropdown notifications">
      <NavLink active to='register'>
        <span  className="d-none d-md-inline-block">register</span>
      </NavLink>
    </NavItem>

    <NavItem className="border-right dropdown notifications">
      <NavLink active to='login'>
      <span  className="d-none d-md-inline-block">login</span>
      </NavLink>
    </NavItem> */}

  </Nav>
);
