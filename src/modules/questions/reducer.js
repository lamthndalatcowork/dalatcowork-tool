import {
    GET_QUESTION_BY_ID_COMPLETE,
    GET_QUESTION_BY_ID_REQUEST,
    POST_CREATE_QUESTION_COMPLETE,
    POST_CREATE_QUESTION_REQUEST
} from "../../actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case GET_QUESTION_BY_ID_REQUEST:
            return {
                ...state,
                type: action.type,
                isFetching: action.isFetching,
                result: action.payload,
                error: action.error
            };
        case POST_CREATE_QUESTION_REQUEST:
            return {
                ...state,
                type: action.type,
                isFetching: action.isFetching,
                result: action.payload,
                error: action.error
            };
        case GET_QUESTION_BY_ID_COMPLETE:
            return {
                ...state,
                type: action.type,
                isFetching: action.isFetching,
                result: action.payload,
                error: action.error
            };
        case POST_CREATE_QUESTION_COMPLETE:
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