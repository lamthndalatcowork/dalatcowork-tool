import {GET_USER_COMPLETE, GET_USER_REQUEST} from "../../actionTypes";
import API from "../../api";

export const getUser = () => dispatch => {
    API.get('http://localhost:5000/users')
        .then((data)=>{
            dispatch({
                type: GET_USER_COMPLETE,
                payload: data,
                error: null
            })
        })
        .catch(err=>{
            dispatch({
                type: GET_USER_COMPLETE,
                payload: null,
                error: err
            })
        })
};