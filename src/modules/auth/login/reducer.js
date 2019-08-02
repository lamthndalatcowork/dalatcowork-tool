import {POST_LOGIN_COMPLETE, POST_LOGIN_REQUEST, POST_REGISTER_COMPLETE} from "../../../actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case POST_LOGIN_COMPLETE:
            return {
                ...state,
                type: action.type,
                isFetching: false,
                result: action.payload,
                error: action.error
            };
        case POST_REGISTER_COMPLETE:
            return {
                ...state,
                type: action.type,
                isFetching: false,
                result: action.payload,
                error: action.error
            };
        default:
            return state;
    }
}