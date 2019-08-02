import {HOME_COMPLETE, HOME_REQUEST} from "../../actionTypes";

export default (state = {}, action) => {
    switch (action.type) {
        case HOME_REQUEST:
            return {
                ...state,
                type: action.type,
                isFetching: true
            };
        case HOME_COMPLETE:
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