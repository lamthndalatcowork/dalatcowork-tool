import React, {Fragment} from 'react'
import {Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";

class AdminControlComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            add: false,
            sub: false,
        };
    }
    subFunction = () => {
        this.setState(prevState => ({
            sub: !prevState.sub
        }));
    };
    addFunction = () => {
        this.setState(prevState => ({
            add: !prevState.add
        }));
    };
    onCreateLogsClick = (type) => {
        if(type === "IN_CREATE"){
            this.addFunction();
        }
        else {
            this.subFunction();
        }
        this.props.onCreateLogsClick(type)
    };
    render() {
        const {add,sub} = this.state;
        return (
            <Fragment>
                <Row>
                    <Col md={6} sm={12} className="mb-2">
                        <Button color="success" onClick={this.addFunction} block>+</Button>
                    </Col>
                    <Col md={6} sm={12} className="mb-2">
                        <Button color="danger" onClick={this.subFunction} block>-</Button>
                    </Col>
                </Row>
                {/* Modal */}
                <div>
                    <Modal isOpen={add} toggle={this.addFunction} className={this.props.className}>
                        <ModalHeader toggle={this.addFunction}>THÊM QUỶ</ModalHeader>
                        <ModalBody>
                            <Label for="">Mô tả</Label>
                            <Input id="describeAdd" type="textarea" rows={3} />

                            <Label for="">Tiền</Label>
                            <Input id="moneyAdd" type="number" />
                        </ModalBody>

                        <ModalFooter>
                            <Button id="btnAdd" color="success"
                                    onClick={()=>{this.onCreateLogsClick("IN_CREATE")}}>+</Button>{' '}
                        </ModalFooter>
                    </Modal>
                </div>
                <div>
                    <Modal isOpen={sub} toggle={this.subFunction} className={this.props.className}>
                        <ModalHeader toggle={this.subFunction}>TRỪ QUỶ</ModalHeader>
                        <ModalBody>
                            <Label for="">Mô tả</Label>
                            <Input id="describeSub" type="textarea" rows={3} />
                            <Label for="">Tiền</Label>
                            <Input id="moneySub" type="number" />
                        </ModalBody>

                        <ModalFooter>
                            <Button color="danger"
                                    onClick={()=>{this.onCreateLogsClick("REDUCE")}}>-</Button>{' '}
                        </ModalFooter>
                    </Modal>
                </div>
            </Fragment>
        )
    }
}

export default AdminControlComponent