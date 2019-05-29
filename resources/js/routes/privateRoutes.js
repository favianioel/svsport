// Layout Types
import { DefaultLayout } from "./../layouts";

// Route Views
import UserProfile from "./../views/UserProfile";
import Teams from "./../views/Team/TeamsWrapper";
import Users from "../views/User/UsersWrapper";
import Competitions from "./../views/Competition/CompetitionsWrapper";
import CreateTeams from "../views/Team/CreateTeams";
import CreateCompetitions from "../views/Competition/CreateCompetitions";

export default [

  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfile
  },
  {
    path: "/users",
    layout: DefaultLayout,
    component: Users
  },
  {
    path: "/teams",
    layout: DefaultLayout,
    component: Teams
  },
  {
    path: "/teams-create",
    layout: DefaultLayout,
    component: CreateTeams
  },
  {
    path: "/competitions",
    layout: DefaultLayout,
    component: Competitions
  },
  {
    path: "/competitions-create",
    layout: DefaultLayout,
    component: CreateCompetitions
  }
];
