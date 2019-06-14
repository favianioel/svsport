// Layout Types
import { DefaultLayout } from "./../layouts";

// Route Views
import UserProfile from "./../views/UserProfile";
import Teams from "./../views/Team/TeamsWrapper";
import Users from "../views/User/UsersWrapper";
import Competitions from "./../views/Competition/CompetitionsWrapper";
import CreateTeams from "../views/Team/CreateTeams";
import CreateCompetitions from "../views/Competition/CreateCompetitions";
import EditUsers from "../views/User/EditUsers";
import EditTeams from "../views/Team/EditTeams";
import EditCompetitions from "../views/Competition/EditCompetitions";

export default [

  {
    path: "/user/profile",
    layout: DefaultLayout,
    component: UserProfile
  },
  {
    path: "/users",
    layout: DefaultLayout,
    component: Users
  },
  {
    path: "/users/edit/:userId",
    layout: DefaultLayout,
    component: EditUsers
  },
  {
    path: "/teams/create",
    layout: DefaultLayout,
    component: CreateTeams
  },
  {
    path: "/teams",
    layout: DefaultLayout,
    component: Teams
  },

  {
    path: "/teams/edit/:userId",
    layout: DefaultLayout,
    component: EditTeams
  },
  {
    path: "/competitions",
    layout: DefaultLayout,
    component: Competitions
  },
  {
    path: "/competitions/create",
    layout: DefaultLayout,
    component: CreateCompetitions
  },
  {
    path: "/competitions/edit",
    layout: DefaultLayout,
    component: EditCompetitions
  }
];
