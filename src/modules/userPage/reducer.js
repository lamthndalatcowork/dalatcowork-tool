import {GET_USER_COMPLETE, GET_USER_REQUEST} from "../../actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case GET_USER_COMPLETE:
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