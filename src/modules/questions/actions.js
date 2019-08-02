import {
    GET_QUESTION_BY_ID_COMPLETE,
    GET_QUESTION_BY_ID_REQUEST,
    POST_CREATE_QUESTION_COMPLETE,
    POST_CREATE_QUESTION_REQUEST
} from "../../actionTypes";
import API from "../../api";

const startRequest = (type)=>{
    return{
        type: type,
        isFetching:true,
        payload: null,
        error: null
    }
};
const receiveRequest = (type,payload,error)=>{
    return{
        type: type,
        isFetching:false,
        payload: payload,
        error: error
    }
};

export const postCreateQuestion = (payload) => dispatch => {
    dispatch(startRequest(POST_CREATE_QUESTION_REQUEST));
    API.post('https://egame-websocket.herokuapp.com/questions',payload)
        .then((data)=>{dispatch(receiveRequest(POST_CREATE_QUESTION_COMPLETE,data,null))})
        .catch(err=>{dispatch(receiveRequest(POST_CREATE_QUESTION_COMPLETE,null,err))})
};
export const getQuestionsById = (id) => dispatch => {
    dispatch(startRequest(GET_QUESTION_BY_ID_REQUEST));
    API.get('https://egame-websocket.herokuapp.com/questions/'+id)
        .then((data)=>{dispatch(receiveRequest(GET_QUESTION_BY_ID_COMPLETE,data,null))})
        .catch(err=>{dispatch(receiveRequest(GET_QUESTION_BY_ID_COMPLETE,null,err))})
};