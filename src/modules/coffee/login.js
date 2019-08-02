import React, { Fragment } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import './styles.css'
class LoginCoffee extends React.Component {

    state = {

    };


    render() {
        return (
            <Fragment>
                <div className="container-login">
                    <div className="wrap-login">
                        <span className="login-form-title">Account Login</span>
                        <form className="login-form">
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <span className="input-group-text" id="basic-addon">
                                    <i class="fas fa-user"></i>
                                    </span>
                                </InputGroupAddon>
                                <Input placeholder="Username" />
                            </InputGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                <span className="input-group-text" id="basic-addon">
                                    <i className="fas fa-lock"></i>
                                </span>
                                </InputGroupAddon>
                                <Input placeholder="******" />
                            </InputGroup>
                            <button className="login-form-btn">Login</button>
                        </form>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default LoginCoffee