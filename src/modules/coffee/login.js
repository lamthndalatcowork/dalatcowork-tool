import React, { Fragment } from "react";
import { InputGroup, InputGroupAddon, Input, Alert } from 'reactstrap';
import './styles.css';
import {POST_LOGIN_REQUEST,POST_LOGIN_COMPLETE} from "../../actionTypes";
import {connect} from 'react-redux';
import { postLogin } from "./action";
import Loading from '../animations/Loading2'
class LoginCoffee extends React.Component {
    state = {
        isLoading:false,
        error:null
    };
    componentWillMount() {
        let data = JSON.parse(localStorage.getItem('user'));
        if(data){
            const { dispatch } = this.props;
            dispatch(postLogin(data));
        }
    }

    componentWillReceiveProps(nextProps) {
        switch (nextProps.login.type) {
            case POST_LOGIN_REQUEST:
                this.setState({ isLoading: nextProps.login.isFetching});
                break;
            case POST_LOGIN_COMPLETE:
                this.setState({ isLoading: nextProps.login.isFetching});
                if(nextProps.login.result.data.success){
                    localStorage.setItem('user',JSON.stringify(nextProps.login.result.data.success));
                    this.props.history.push('/');
                }
                else{
                    this.setState({error:"Incorrect!!!"});
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
    };
    render() {
        const {isLoading,error} = this.state;
        const btnLogin=<button type="submit" className="login-form-btn" onClick={()=>this.onSubmitForm()}>Login</button>;
        const alert = error === null ? '': <Alert style={{margin: '0'}} color="warning">Incorrect!!!</Alert>;
        return (
            <Fragment>
                <div className="container-login">
                    <div className="wrap-login">
                        <form className="login-form">
                            <a href="/" title="Home"><img className="text-center" src="http://www.pngmart.com/files/1/Coffee-Logo-PNG-Image.png" width={63} /></a>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <span className="input-group-text" id="basic-addon">
                                    <i className="fas fa-user"></i>
                                    </span>
                                </InputGroupAddon>
                                <Input placeholder="Username" id="inputUserName"  type="text" />
                            </InputGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                <span className="input-group-text" id="basic-addon">
                                    <i className="fas fa-lock"></i>
                                </span>
                                </InputGroupAddon>
                                <Input placeholder="******" id="inputPassword" type="password"/>
                            </InputGroup>
                            {alert}
                            {isLoading ? <Loading/> : btnLogin}
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    login: { ...state.login }
});

export default connect(mapStateToProps)(LoginCoffee)