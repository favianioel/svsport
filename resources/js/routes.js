import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Teams from "./views/Teams";
import Users from "./views/Users";
import Competitions from "./views/Competitions";


export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/register" />
  },
  {
    path: "/teams",
    layout: DefaultLayout,
    component: Teams
  },
  {
    path: "/users",
    layout: DefaultLayout,
    component: Users
  },
  {
    path: "/competitions",
    layout: DefaultLayout,
    component: Competitions
  }
];
