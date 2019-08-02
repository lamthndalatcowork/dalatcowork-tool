import { POST_LOGIN_COMPLETE, POST_REGISTER_COMPLETE} from "../../../actionTypes";
import API from "../../../api";
import PropTypes from "prop-types";

export const postLoginUser = (data) => dispatch => {
    API.post('http://localhost:5000/users/login', data)
        .then((data) => {
            dispatch({
                type: POST_LOGIN_COMPLETE,
                payload: data,
                error: null
            })
        })
        .catch(err => {
            dispatch({
                type: POST_LOGIN_COMPLETE,
                payload: null,
                error: err
            })
        });
    postLoginUser.propTypes = {
        data:PropTypes.object
    }
};
export const postRegisterWithFB = (data) => dispatch => {
    API.post('http://localhost:5000/users/register', data)
        .then((data) => {
            dispatch({
                type: POST_REGISTER_COMPLETE,
                payload: data,
                error: null
            })
        })
        .catch(err => {
            dispatch({
                type: POST_REGISTER_COMPLETE,
                payload: null,
                error: err
            })
        });

    postLoginUser.propTypes = {
        data:PropTypes.object
    }
};

