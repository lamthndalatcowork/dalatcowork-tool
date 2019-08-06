import React, { Fragment } from "react";
import styles from "./stylesHome.css";
import { Toast, ToastBody, ToastHeader, Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label} from 'reactstrap';
import {
    GET_LOGS_MONEY_COMPLETE,
    GET_LOGS_MONEY_REQUEST,
    POST_CREATE_LOG_MONEY_REQUEST,
    POST_CREATE_LOG_MONEY_COMPLETE
} from "../../actionTypes";

import { connect } from "react-redux";
import { getLogsMoney,postCreateLogMoney, postLogin} from "./action"
import Loading from '../animations/Loading'

class CoffeePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:false,
            logs: [],
            money: 0,
            add: false,
            sub: false,
        };
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(getLogsMoney());
    }
    componentWillReceiveProps(nextProps) {
        switch (nextProps.coffee.type) {
            case GET_LOGS_MONEY_REQUEST:
                this.setState({ isLoading: nextProps.coffee.isFetching});
                break;
            case GET_LOGS_MONEY_COMPLETE:
                this.setState({ 
                    isLoading: nextProps.coffee.isFetching,
                    logs: nextProps.coffee.result.data.logs, 
                    money:nextProps.coffee.result.data.money
                });
                break;
            default:
                return;
        }
    }

    subFunction = () => {
        this.setState(prevState => ({
            sub: !prevState.sub
        }));
    }
    addFunction = () => {
        this.setState(prevState => ({
            add: !prevState.add
        }));
    }
    onAddBtnClick = () => {

        let describe = document.getElementById("describeAdd").value;
        let money = parseInt(document.getElementById("moneyAdd").value);
        let type = "IN_CREATE";

        const { dispatch } = this.props;

        if (describe != null && money != null) {
            let payload = {
                "caption": describe,
                "money": money,
                "type": type
            }
            dispatch(postCreateLogMoney(payload));
        }


    }

    onSubBtnClick = () => {

        let describe = document.getElementById("describeSub").value;
        let money = parseInt(document.getElementById("moneySub").value);
        let type = "REDUCE"
        const { dispatch } = this.props;
        if (describe != null && money != null) {
            let payload = {
                "caption": describe,
                "money": money,
                "type": type
            }
            dispatch(postCreateLogMoney(payload));
        }
    }
    render() {
        const {isLoading}=this.state;
        const content=<Fragment>
        <h2 className="sumMoney">{this.state.money}đ</h2>
        <Row>
            <Col>
                <div className="wrap">
                    {
                        this.state.logs.map((items) => {
                            if (items.type == "REDUCE") {
                                return <div>
                                    <Toast>
                                        <ToastHeader icon="danger">
                                            Trừ quỷ
                                        </ToastHeader>
                                        <ToastBody>
                                            <div className={styles.describe}>{items.caption}</div>
                                            <div className={styles.money}>-{items.money}đ</div>
                                        </ToastBody>
                                    </Toast>
                                </div>
                            } else if (items.type == "IN_CREATE") {
                                return <div>
                                    <Toast>
                                        <ToastHeader icon="warning">
                                            THÊM QUỶ
                                        </ToastHeader>
                                        <ToastBody>
                                            <div className={styles.describe}>{items.caption}</div>
                                            <div className={styles.money}>+{items.money}đ</div>
                                        </ToastBody>
                                    </Toast>
                                </div>
                            }
                        })
                    }
                </div>
            </Col>
        </Row>
        </Fragment>;
        return (
            <Fragment>
                <Container>
                    {/* Client */}
                    <Row className="client">
                        <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }} >
                            <h1 className="title">CLIENT</h1>
                                {isLoading ? <Loading/> : content}
                            <hr />
                        </Col>
                    </Row>

                    {/* Admin */}
                    <Row className="admin">
                        <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }} >
                            <h1 className="title">ADMIN</h1>
                            <h2 className="sumMoney">{this.state.money}đ</h2>
                            <Row>
                                <Col>
                                    <div className="wrap">
                                        {
                                            this.state.logs.map((items) => {
                                                if (items.type == "IN_CREATE") {
                                                    return <div>
                                                        <Toast>
                                                            <ToastHeader icon="warning">
                                                                THÊM QUỶ
                                                            </ToastHeader>
                                                            <ToastBody>
                                                                <div className={styles.describe}>{items.caption}</div>
                                                                <div className={styles.money}>+{items.money}đ</div>
                                                            </ToastBody>
                                                        </Toast>
                                                    </div>
                                                }
                                                else if (items.type == "REDUCE") {
                                                    return <div>
                                                        <Toast>
                                                            <ToastHeader icon="danger">
                                                                Trừ quỷ
                                                            </ToastHeader>
                                                            <ToastBody>
                                                                <div className={styles.describe}>{items.caption}</div>
                                                                <div className={styles.money}>-{items.money}đ</div>
                                                            </ToastBody>
                                                        </Toast>
                                                    </div>
                                                }

                                            })
                                        }
                                    </div>
                                </Col>
                            </Row>
                            <div className="button">
                                <Button color="warning" onClick={this.addFunction} className="add">+</Button>{' '}
                                <Button color="danger" onClick={this.subFunction} className="sub">-</Button>{' '}
                            </div>

                            {/* Modal */}
                            <div>
                                <Modal isOpen={this.state.add} toggle={this.addFunction} className={this.props.className}>
                                    <ModalHeader toggle={this.addFunction}>THÊM QUỶ</ModalHeader>
                                    <ModalBody>
                                        <Label for="">Mô tả</Label>
                                        <Input id="describeAdd" type="textarea" rows={3} />

                                        <Label for="">Tiền</Label>
                                        <Input id="moneyAdd" type="number" />
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button id="btnAdd" color="primary" onClick={this.onAddBtnClick}>Thêm</Button>{' '}
                                    </ModalFooter>
                                </Modal>
                            </div>
                            <div>
                                <Modal isOpen={this.state.sub} toggle={this.subFunction} className={this.props.className}>
                                    <ModalHeader toggle={this.subFunction}>TRỪ QUỶ</ModalHeader>
                                    <ModalBody>
                                        <Label for="">Mô tả</Label>
                                        <Input id="describeSub" type="textarea" rows={3} />
                                        <Label for="">Tiền</Label>
                                        <Input id="moneySub" type="number" />
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button color="primary" onClick={this.onSubBtnClick}>Thêm</Button>{' '}
                                    </ModalFooter>
                                </Modal>
                            </div>

                        </Col>
                    </Row>
                    <hr />
                </Container>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    coffee: { ...state.coffee }
});

export default connect(mapStateToProps)(CoffeePage)
