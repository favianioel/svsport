import React from "react";
import { Nav, NavItem, NavLink} from "shards-react";
import UserActions from "./UserActions";
import { checkCookie } from '../../../../utils/cookies';


export default () => (
  <Nav  navbar className="ml-auto">
    {/* <Notifications /> */}

    {checkCookie() !== null ? (
      <UserActions />
    ) : false
    }

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
