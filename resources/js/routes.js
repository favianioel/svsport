import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Teams from "./views/Teams";
import Users from "./views/Users";
import Competitions from "./views/Competitions";
import BlogOverview from "./views/BlogOverview";
import UserProfile from "./views/UserProfile";
import LoginPage from "./views/Auth/LoginPage";
import RegisterPage from "./views/Auth/RegisterPage";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/register",
    layout: DefaultLayout,
    component: RegisterPage
  },
  {
    path: "/login",
    layout: DefaultLayout,
    component: LoginPage
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
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
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfile
  }
];
