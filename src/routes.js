import HomePage from "./modules/home";
import LoginPage from "./modules/auth/login";
import RegisterPage from "./modules/auth/register";
import errors from "./modules/errors";
import Root from "./modules/Root";
import Question from "./modules/questions";
import UserPage from "./modules/userPage";

const routes = [
    {
        component: Root,
        routes: [
            {
                path: "/",
                component: HomePage,
                exact: true
            },
            {
                path: "/login",
                component: LoginPage,
                exact: true
            },
            {
                path: "/questions",
                component: Question,
                exact: true
            },
            {
                path: "/register",
                component: RegisterPage,
                exact: true
            },
            {
                path: "/trang_chu",
                component: UserPage,
                exact: true
            },
            {
                path: "*",
                component: errors.PageNotFound
            }
        ]
    }
];

export default routes;