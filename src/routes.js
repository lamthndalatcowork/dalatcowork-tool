import errors from "./modules/errors";
import Root from "./modules/Root";
import Question from "./modules/questions";
import UserPage from "./modules/userPage";
import LoginCoffee from "./modules/coffee/login";
import CoffeePage from "./modules/coffee";


const routes = [
    {
        component: Root,
        routes: [
            {
                path: "/",
                component: CoffeePage,
                exact: true
            },
            {
                path: "/questions",
                component: Question,
                exact: true
            },
            {
                path: "/login",
                component: LoginCoffee,
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