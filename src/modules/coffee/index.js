import React, {Fragment} from "react";
import styles from "./styles.css";
import {Toast, ToastBody, ToastHeader, Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
class CoffeePage extends React.Component {

    state = {

    };
    constructor(props) {
        super(props);
        this.state = {
            add: false,
            sub:false,
        };
    }

    subFunction=()=> {
        this.setState(prevState => ({
            sub: !prevState.sub
        }));
    }
    addFunction =()=> {
        this.setState(prevState => ({
            add: !prevState.add
        }));
    }

    
    render() {
        return (
            <Fragment>
                <Container>
                    {/* Client */}
                    <Row className="client">
                        <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }} >
                            <h1 className="title">Client</h1>
                            <h3 className="sumMoney">300000đ</h3>
                    
                            <Row>
                                <Col>
                                    <div className="wrap">
                                        <Toast>
                                            <ToastHeader icon="danger">
                                            Trừ quỷ
                                            </ToastHeader>
                                            <ToastBody>
                                                <div className={styles.describe}>Ngày 2/8/2019 tiền coffee</div>
                                                <div className={styles.money}>-24000đ</div>
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon="warning">
                                            Thêm quỷ
                                            </ToastHeader>
                                            <ToastBody>
                                                <div className={styles.describe}>Anh T.Anh đã thêm vào quỷ</div>
                                                <div className={styles.money}>+300000đ</div>
                                            </ToastBody>
                                        </Toast>  
                                        <Toast>
                                            <ToastHeader icon="danger">
                                            Trừ quỷ
                                            </ToastHeader>
                                            <ToastBody>
                                                <div className={styles.describe}>Ngày 2/8/2019 tiền coffee</div>
                                                <div className={styles.money}>-24000đ</div>
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon="warning">
                                            Thêm quỷ
                                            </ToastHeader>
                                            <ToastBody>
                                                <div className={styles.describe}>Anh T.Anh đã thêm vào quỷ</div>
                                                <div className={styles.money}>+300000đ</div>
                                            </ToastBody>
                                        </Toast>  
                                        <Toast>
                                            <ToastHeader icon="danger">
                                            Trừ quỷ
                                            </ToastHeader>
                                            <ToastBody>
                                                <div className={styles.describe}>Ngày 2/8/2019 tiền coffee</div>
                                                <div className={styles.money}>-24000đ</div>
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon="danger">
                                            Trừ quỷ
                                            </ToastHeader>
                                            <ToastBody>
                                                <div className={styles.describe}>Ngày 2/8/2019 tiền coffee</div>
                                                <div className={styles.money}>-24000đ</div>
                                            </ToastBody>
                                        </Toast>                 
                                    </div>
                                </Col>
                            </Row>
                            <hr/>
                        </Col>
                    </Row>
                   
                     {/* Admin */}
                     <Row className="admin">
                        <Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }} lg={{ size: 4, offset: 4 }} >
                            <h1 className="title">Admin</h1>
                            <h3 className="sumMoney">300000đ</h3>
                            <Row>
                                <Col>
                                    <div className="wrap">
                                        <Toast>
                                            <ToastHeader icon="danger">
                                            Trừ quỷ
                                            </ToastHeader>
                                            <ToastBody>
                                                <div className={styles.describe}>Ngày 2/8/2019 tiền coffee</div>
                                                <div className={styles.money}>-24000đ</div>
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon="warning">
                                            Thêm quỷ
                                            </ToastHeader>
                                            <ToastBody>
                                                <div className={styles.describe}>Anh T.Anh đã thêm vào quỷ</div>
                                                <div className={styles.money}>+300000đ</div>
                                            </ToastBody>
                                        </Toast>  
                                        <Toast>
                                            <ToastHeader icon="danger">
                                            Trừ quỷ
                                            </ToastHeader>
                                            <ToastBody>
                                                <div className={styles.describe}>Ngày 2/8/2019 tiền coffee</div>
                                                <div className={styles.money}>-24000đ</div>
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon="warning">
                                            Thêm quỷ
                                            </ToastHeader>
                                            <ToastBody>
                                                <div className={styles.describe}>Anh T.Anh đã thêm vào quỷ</div>
                                                <div className={styles.money}>+300000đ</div>
                                            </ToastBody>
                                        </Toast>  
                                        <Toast>
                                            <ToastHeader icon="danger">
                                            Trừ quỷ
                                            </ToastHeader>
                                            <ToastBody>
                                                <div className={styles.describe}>Ngày 2/8/2019 tiền coffee</div>
                                                <div className={styles.money}>-24000đ</div>
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon="danger">
                                            Trừ quỷ
                                            </ToastHeader>
                                            <ToastBody>
                                                <div className={styles.describe}>Ngày 2/8/2019 tiền coffee</div>
                                                <div className={styles.money}>-24000đ</div>
                                            </ToastBody>
                                        </Toast>                 
                                    </div>
                                </Col>
                            </Row>
                            <Button color="warning" onClick={this.addFunction} className="add">+</Button>{' '}
                            <Button color="danger" onClick={this.subFunction} className="sub">-</Button>{' '}
                            {/* Modal */}
                            <div>   
                                <Modal isOpen={this.state.add} toggle={this.addFunction} className={this.props.className}>
                                    <ModalHeader toggle={this.addFunction}>THÊM QUỶ</ModalHeader>
                                    <ModalBody>
                                        <Label for="">Mô tả</Label>
                                        <Input type="textarea" rows={3} />
                                        <Label for="">Tiền</Label>
                                        <Input type="number"/>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button color="primary" onClick={this.addFunction}>Thêm</Button>{' '}
                                    </ModalFooter>
                                </Modal>
                            </div>

                            <div>   
                                <Modal isOpen={this.state.sub} toggle={this.subFunction} className={this.props.className}>
                                    <ModalHeader toggle={this.subFunction}>THÊM QUỶ</ModalHeader>
                                    <ModalBody>
                                        <Label for="">Mô tả</Label>
                                        <Input type="textarea" rows={3} />
                                        <Label for="">Tiền</Label>
                                        <Input type="number"/>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button color="primary" onClick={this.subFunction}>Thêm</Button>{' '}
                                    </ModalFooter>
                                </Modal>
                            </div>

                        </Col>
                    </Row>
                    <hr/>
                </Container>
            </Fragment>
        )
    }
}


export default CoffeePage