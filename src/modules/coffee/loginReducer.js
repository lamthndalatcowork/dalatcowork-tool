import {POST_LOGIN_COMPLETE, POST_LOGIN_REQUEST} from "../../actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case POST_LOGIN_REQUEST:
            return {
                ...state,
                type: action.type,
                isFetching: action.isFetching,
                result: action.payload,
                error: action.error
            };
        case POST_LOGIN_COMPLETE:
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
