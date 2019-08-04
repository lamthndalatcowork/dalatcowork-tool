import {
    GET_LOGS_MONEY_COMPLETE,
    GET_LOGS_MONEY_REQUEST,
    POST_CREATE_LOG_MONEY_REQUEST,
    POST_CREATE_LOG_MONEY_COMPLETE
} from "../../actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case GET_LOGS_MONEY_REQUEST:
            return {
                ...state,
                type: action.type,
                isFetching: action.isFetching,
                result: action.payload,
                error: action.error
            };
        case GET_LOGS_MONEY_COMPLETE:
            return {
                ...state,
                type: action.type,
                isFetching: action.isFetching,
                result: action.payload,
                error: action.error
            };
        case POST_CREATE_LOG_MONEY_REQUEST:
            return {
                ...state,
                type: action.type,
                isFetching: action.isFetching,
                result: action.payload,
                error: action.error
            };
        case POST_CREATE_LOG_MONEY_COMPLETE:
            return {
                ...state,
                type: action.type,
                isFetching: action.isFetching,
                result: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}
