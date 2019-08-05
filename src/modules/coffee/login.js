import React, { Fragment } from "react";
import { InputGroup, InputGroupAddon, Input, Alert } from 'reactstrap';
import './styles.css';
import {POST_LOGIN_REQUEST,POST_LOGIN_COMPLETE} from "../../actionTypes";
import {connect} from 'react-redux';
import { postLogin } from "./action";
import Loading from '../animations/Loading'
class LoginCoffee extends React.Component {

    state = {
        isLoading:false
    };
    componentWillReceiveProps(nextProps) {
        switch (nextProps.login.type) {
            case POST_LOGIN_REQUEST:
                this.setState({ isLoading: nextProps.login.isFetching});
                break;
            case POST_LOGIN_COMPLETE:
                this.setState({ isLoading: nextProps.login.isFetching});
                if(nextProps.login.result.data.success){
                    this.props.history.push('/coffee');
                }
                else{
                   alert('False');
                }
                break;
            default:
                return;
        }
    }
    onSubmitForm=()=>{
        let data={};
        let userName=document.getElementById('inputUserName').value;
        let password=document.getElementById('inputPassword').value;
        data.user_name=userName;
        data.password=password;
        const { dispatch } = this.props;
        dispatch(postLogin(data));
    }
    render() {
        const {isLoading} = this.state;
        const btnLogin=<button className="login-form-btn" onClick={()=>this.onSubmitForm()}>Login</button>;
        return (
            <Fragment>
                <div className="container-login">
                    <div className="wrap-login">
                        <span className="login-form-title">Account Login</span>
                        <div className="login-form">
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <span className="input-group-text" id="basic-addon">
                                    <i class="fas fa-user"></i>
                                    </span>
                                </InputGroupAddon>
                                <Input placeholder="Username" id="inputUserName" />
                            </InputGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                <span className="input-group-text" id="basic-addon">
                                    <i className="fas fa-lock"></i>
                                </span>
                                </InputGroupAddon>
                                <Input placeholder="******" id="inputPassword"/>
                            </InputGroup>
                            {isLoading ? <Loading/> : btnLogin}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    login: { ...state.coffee }
});

export default connect(mapStateToProps)(LoginCoffee)