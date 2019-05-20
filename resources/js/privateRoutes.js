import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import UserProfile from "./views/UserProfile";

export default [

  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfile
  },
];
