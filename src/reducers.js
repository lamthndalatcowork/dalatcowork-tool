import {combineReducers} from "redux";
import homeReducer from "./modules/home/reducers";
import userReducer from "./modules/userPage/reducer";
import questionReducer from "./modules/questions/reducer";
import coffeeReducer from "./modules/coffee/reducer";
import login from "./modules/coffee/loginReducer";
export default combineReducers({
    home: homeReducer,
    users: userReducer,
    question:questionReducer,
    coffee: coffeeReducer,
    login:login
});
