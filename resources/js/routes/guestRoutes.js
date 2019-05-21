// Layout Types
import { GuestLayout } from "./../layouts";

// Route Views
import LoginPage from "./../views/Auth/LoginPage";
import RegisterPage from "./../views/Auth/RegisterPage";

export default [
    {
        path: "/register",
        layout: GuestLayout,
        component: RegisterPage
    },
    {
        path: "/login",
        layout: GuestLayout,
        component: LoginPage
    },
];
