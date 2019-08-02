import {combineReducers} from "redux";
import homeReducer from "./modules/home/reducers";
import userReducer from "./modules/userPage/reducer";
import loginReducer from "./modules/auth/login/reducer"

import questionReducer from "./modules/questions/reducer";

export default combineReducers({
    home: homeReducer,
    users: userReducer,
    login: loginReducer,
    question:questionReducer,
});