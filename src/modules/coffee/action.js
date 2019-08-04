import {GET_LOGS_MONEY_COMPLETE, 
    GET_LOGS_MONEY_REQUEST,
    POST_CREATE_LOG_MONEY_REQUEST,
    POST_CREATE_LOG_MONEY_COMPLETE} from "../../actionTypes";


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

export const getLogsMoney = (payload) => dispatch => {
    dispatch(startRequest(GET_LOGS_MONEY_REQUEST));
    API.get('https://egame-websocket.herokuapp.com/coffee/logs',payload)
        .then((data)=>{dispatch(receiveRequest(GET_LOGS_MONEY_COMPLETE,data,null))})
        .catch(err=>{dispatch(receiveRequest(GET_LOGS_MONEY_COMPLETE,null,err))})
};


export const postCreateLogMoney = (payload) => dispatch => {
    alert("i lived here!");
    console.log("payload: ", payload);
    dispatch(startRequest(POST_CREATE_LOG_MONEY_REQUEST));
    API.post('https://egame-websocket.herokuapp.com/coffee/logs',payload)
        .then((data)=>{dispatch(receiveRequest(POST_CREATE_LOG_MONEY_COMPLETE,data,null))})
        .catch(err=>{dispatch(receiveRequest(POST_CREATE_LOG_MONEY_COMPLETE,null,err))})
};