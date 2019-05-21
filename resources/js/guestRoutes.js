// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import LoginPage from "./views/Auth/LoginPage";
import RegisterPage from "./views/Auth/RegisterPage";

export default [
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
];
