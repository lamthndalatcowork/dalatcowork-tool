import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers"

const loggerMiddleware = store => next => action =>{
    console.log("Middleware");
    next(action);
};

const configureStore = (initialState = {}) => (
    createStore(rootReducer, initialState, applyMiddleware(thunk, logger,loggerMiddleware))
);

export default configureStore;