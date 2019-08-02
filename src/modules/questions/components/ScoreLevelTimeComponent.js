import React, {Fragment} from 'react'
import Input from "reactstrap/es/Input";
import FormGroup from "reactstrap/es/FormGroup";
import Form from "reactstrap/es/Form";
import Label from "reactstrap/es/Label";
import Row from "reactstrap/es/Row";
import {Button, Col, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";

class ScoreLevelTimeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            levels: [],
            score: "",
            time: "",
        };
    }

    componentWillMount() {
        let listLevels = []
        for (let i = 1; i <= 10; i++) {
            listLevels.push(i);
        }
        this.setState({levels: listLevels});
    }

    render() {
        let {levels, score, time} = this.state;
        return (
            <Fragment>
                <Form>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="levelFill" className="mr-1">Level</Label>
                                <Input type="select" name="select" id="levelFill">
                                    {
                                        levels.map((item, index) => {
                                            return <option key={index}>{item}</option>
                                        })
                                    }
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="scoreFill">Score</Label>
                                <Input
                                    type="number"
                                    name="score"
                                    id="scoreFill"
                                    placeholder="0"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="timeFill">Time</Label>
                                <InputGroup>
                                    <Input
                                        type="number"
                                        name="time"
                                        id="timeFill"
                                        placeholder="0"
                                    />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>S</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>

            </Fragment>
        )
    }
}

export default ScoreLevelTimeComponent