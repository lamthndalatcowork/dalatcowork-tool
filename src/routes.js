import HomePage from "./modules/home";
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
                component: HomePage,
                exact: true
            },
            {
                path: "/questions",
                component: Question,
                exact: true
            },
            {
                path: "/coffee/login",
                component: LoginCoffee,
                exact: true
            },
            {
                path: "/coffee",
                component: CoffeePage,
                exact: true
            },
      
            // {
            //     path: "/modals",
            //     component: ModalPage,
            //     exact: true
            // },

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