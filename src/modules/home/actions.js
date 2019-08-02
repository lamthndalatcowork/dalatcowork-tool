import {HOME_COMPLETE, HOME_REQUEST} from "../../actionTypes";

export const loadHome = () => dispatch => {
    dispatch({type: HOME_REQUEST});

    setTimeout(() => {
        dispatch({
            type: HOME_COMPLETE,
            payload: {success: true},
            error: null
        })
    }, 2000);
};