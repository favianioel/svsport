// Layout Types
import { DefaultLayout } from "./../layouts";

// Route Views
import UserProfile from "./../views/UserProfile";
import Teams from "./../views/Teams";
import Users from "./../views/Users";
import Competitions from "./../views/Competitions";

export default [

  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfile
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
