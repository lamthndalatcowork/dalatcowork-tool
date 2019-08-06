import React, { } from "react";
import styles from "./stylesHome.css";
import { Toast, ToastBody, ToastHeader, Container, Row, Col, Button, } from 'reactstrap';
import {
    GET_LOGS_MONEY_COMPLETE,
    GET_LOGS_MONEY_REQUEST,
    POST_CREATE_LOG_MONEY_REQUEST,
    POST_CREATE_LOG_MONEY_COMPLETE, DELETE_LOGS_MONEY_REQUEST, DELETE_LOGS_MONEY_COMPLETE
} from "../../actionTypes";

import { connect } from "react-redux";
import {deleteLogById, getLogsMoney, postCreateLogMoney} from "./action"
import Loading from '../animations/Loading'
import AdminControlComponent from "./components/AdminControlComponent";
import LogItemComponent from "./components/LogItemComponent";

class CoffeePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            logs: [],
            money: 0,
            idDelete:null,
            typeUser:"CLIENT",
        };
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getLogsMoney());
    }
    componentWillReceiveProps(nextProps) {
        let {result} = nextProps.coffee;
        switch (nextProps.coffee.type) {
            case GET_LOGS_MONEY_REQUEST:
                this.setState({ isLoading: nextProps.coffee.isFetching });
                break;
            case GET_LOGS_MONEY_COMPLETE:
                if(!nextProps.login.result){
                    this.props.history.push('/');
                    return;
                }
                this.setState({
                    isLoading: nextProps.coffee.isFetching,
                    logs: nextProps.coffee.result.data.logs,
                    money: nextProps.coffee.result.data.money,
                    typeUser:nextProps.login.result.data.success.type
                });
                break;
            case POST_CREATE_LOG_MONEY_REQUEST:
                this.setState({ isLoading: nextProps.coffee.isFetching});
                break;
            case POST_CREATE_LOG_MONEY_COMPLETE:
                let newLogs = this.state.logs;
                newLogs.push(result.data.success.logs.data);
                this.setState({
                    isLoading: nextProps.coffee.isFetching,
                    money:result.data.success.money,
                    logs:newLogs
                });
                break;
            case DELETE_LOGS_MONEY_COMPLETE:
                if(result.data.success){
                    let logs = this.state.logs;
                    logs = logs.filter(item=>{
                        return !(item._id === result.data.success.id)
                    });
                    this.setState({
                        isLoading: nextProps.coffee.isFetching,
                        money:result.data.success.money,
                        logs:logs,
                        idDelete:null
                    });
                }
                else {
                    alert("delete fail");
                }
                break;
            default:
                return;
        }
    }
    onCreateLogsClick = (type) =>{
        let describe,money;
        type = type.toUpperCase();
        if(type === "REDUCE"){
            describe = document.getElementById("describeSub").value;
            money = parseInt(document.getElementById("moneySub").value);
        }
        if(type === "IN_CREATE"){
            describe = document.getElementById("describeAdd").value;
            money = parseInt(document.getElementById("moneyAdd").value);
        }
        const { dispatch } = this.props;
        if (describe != null && money != null) {
            let payload = {
                "caption": describe,
                "money": money,
                "type": type
            };
            dispatch(postCreateLogMoney(payload));
        }else{
            alert("May be description or money is null");
        }
    };
    onBtnLogoutClick = () => {
        localStorage.removeItem("user");
        this.props.history.push('/');
    };
    getNumberFormat = (number) => {
        return new Intl.NumberFormat('vn-IN', {}).format(number)+" đ"
    };
    onDeleteLogClick =(id)=>{
        this.setState({idDelete:id});
        const { dispatch } = this.props;
        dispatch(deleteLogById(id));
    };
    render() {
        const { isLoading,logs,money,typeUser,idDelete} = this.state;
        const adminControls = <AdminControlComponent onCreateLogsClick={this.onCreateLogsClick}/>;

        return(
            <Container>
                <Row>
                    <Col md={12} className="mt-3" >
                        <div className="float-right">
                            <Button onClick={this.onBtnLogoutClick}>Log out</Button>
                        </div>
                    </Col>
                    <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} >
                        {/*<h1 className="title">{typeUser}</h1>*/}
                        <h2 className="sumMoney">{this.getNumberFormat(money)}</h2>
                        {
                            isLoading ?
                                <Loading /> :
                                <div className="wrap">
                                    {
                                        logs.map((item,index) => {
                                            if(item._id === idDelete){
                                                return <Loading/>
                                            }
                                            return <LogItemComponent typeUser={typeUser} log={item} key={index} onDelete={this.onDeleteLogClick}/>
                                        })
                                    }
                                </div>
                        }
                        {typeUser === 'ADMIN' ? adminControls: ''}
                    </Col>
                </Row>
            </Container>
            )
    }
}

const mapStateToProps = (state) => ({
    login:{...state.login},
    coffee: { ...state.coffee }
});

export default connect(mapStateToProps)(CoffeePage)
