import React, {Fragment} from "react";
import {Button, Col, Container, Row} from "reactstrap"
import Form from "reactstrap/es/Form";
import FormGroup from "reactstrap/es/FormGroup";
import Label from "reactstrap/es/Label";
import Input from "reactstrap/es/Input";
import {connect} from "react-redux";
import {postLoginUser,postRegisterWithFB} from "./action";
import PropTypes from "prop-types";
import {POST_LOGIN_COMPLETE,POST_REGISTER_COMPLETE} from "../../../actionTypes";
import FacebookLogin from 'react-facebook-login';

class LoginPage extends React.Component {

    onLoginClick = () => {

        let username = document.getElementById('user-name').value;
        let password = document.getElementById('password').value;
        let dataLogin = {username:username,password:password};
        this.props.postLoginUser(dataLogin);

    };
    responseFacebook = (response) => {
        let dataRegister = {username:response.email,password:123,displayName: response.name,email:response.email};
        this.props.postRegisterWithFB(dataRegister);
    };
    componentWillReceiveProps(nextProps) {
        let resultLogin = nextProps.login;
        switch (resultLogin.type) {
            case POST_LOGIN_COMPLETE:
                if(resultLogin.result.data.success){
                    this.props.history.push('/trang_chu');
                }
                else{
                    alert("fail")
                }
                break;
            case POST_REGISTER_COMPLETE:
                document.cookie = 'cookie='+ resultLogin.result.data[1];
                this.props.history.push('/trang_chu');
                break;
            default:
                break
        }
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col xs="12" md={{size: 4, offset: 4}}>
                            <Form className={"border p-2"}>
                                <h2 className="text-center">Login user</h2>
                                <FormGroup>
                                    <Label for="user-name">User name</Label>
                                    <Input id="user-name" type="text" name="username"/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">password</Label>
                                    <Input id="password" type="password" name="password"/>
                                </FormGroup>
                                <FormGroup>
                                    <Button color="primary" size="lg" onClick={this.onLoginClick} block>Login</Button>
                                </FormGroup>
                                <FormGroup className={"text-center"}>
                                    <FacebookLogin
                                        appId="2590336290977871"
                                        autoLoad={true}
                                        fields="name,email,picture"
                                        callback={this.responseFacebook}
                                        render={renderProps => (
                                            <button onClick={renderProps.onClick}>This is my custom FB button</button>
                                        )}
                                    />,
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    login: {...state.login}
});

const mapDispatchToProps = dispatch => ({
    postLoginUser : (data) => dispatch(postLoginUser(data)),
    postRegisterWithFB:(data) => dispatch(postRegisterWithFB(data))
});

LoginPage.propTypes = {
    postLoginUser : PropTypes.func,
    postRegisterWithFB: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)