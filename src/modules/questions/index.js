import React, {Fragment} from "react"
import style from "./styles.css"
import {connect} from "react-redux";
import _ from "lodash";
import Container from "reactstrap/es/Container";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import NodeComponent from "./components/NodeComponent";
import ContentQuestionComponent from "./components/ContentQuestionComponent";
import ScoreLevelTimeComponent from "./components/ScoreLevelTimeComponent";
import {Button} from "reactstrap";
import {postCreateQuestion} from "./actions";
import AnswerComponent from "./components/AnswerComponent";
import {GET_USER_COMPLETE, POST_CREATE_QUESTION_COMPLETE, POST_CREATE_QUESTION_REQUEST} from "../../actionTypes";
import LoadingAnimation from './../animations/Loading'

var randomChar = require('random-char');

class Question extends React.Component {
    state = {
        isLoading: false,
        node: [],
        numberMatrix: 5,
    };

    componentWillMount() {
        let matrix = this.getMatrixBegin();
        matrix = this.getMatrixRandomChar(matrix);
        this.setState({node: matrix});
    }

    getMatrixBegin = () => { //create a matrix with all "*"
        let matrix = [];
        for (let i = 0; i < this.state.numberMatrix; i++) {
            let row = [];
            for (let j = 0; j < this.state.numberMatrix; j++) {
                // row.push(randomChar({upper: true})); // randomChar() Take a random Anphabe character
                row.push("*");
            }
            matrix.push(row);
        }
        return matrix;
    };

    getMatrixRandomChar = (matrix) => {
        for (let i = 0; i < this.state.numberMatrix; i++) {
            for (let j = 0; j < this.state.numberMatrix; j++) {
                if (matrix[i][j] === "*") {
                    matrix[i][j] = randomChar({upper: true}); // randomChar() Take a random Anphabe character
                }
            }
        }
        return matrix;
    };

    getMatrixWithMeanWord = (mean) => {
        mean = mean.split('');
        let curMatrix = this.getMatrixBegin();
        let randomX = Math.floor(Math.random() * curMatrix[0].length);
        let randomY = Math.floor(Math.random() * curMatrix[0].length);
        curMatrix[randomX][randomY] = mean[0]; // Take a random location to push a first character
        let cur = [randomX, randomY];
        for (let i = 1; i < mean.length; i++) {
            cur = this.updateANote(cur[0], cur[1], curMatrix);
            if (cur === undefined) {  // when have not way to run make a begin
                return this.getMatrixWithMeanWord(mean);
            }
            curMatrix[cur[0]][cur[1]] = mean[i];
        }
        return curMatrix;
    };

    updateANote = (x, y, matrix) => {
        let nodeArrow = [[x - 1, y], [x, y - 1], [x, y + 1], [x + 1, y]];
        let nodeEmpty = nodeArrow.filter(item => {
            try {
                if (matrix[item[0]][item[1]] === "*") {
                    return true;
                } else return false;
            } catch (e) {
                return false;
            }
        });
        let randomDirect = Math.floor(Math.random() * nodeEmpty.length);
        return nodeEmpty[randomDirect];
    };

    componentWillReceiveProps(nextProps) {
        let {question} = nextProps;
        switch (question.type) {
            case POST_CREATE_QUESTION_REQUEST:
                this.setState({isLoading: true});
                break;
            case POST_CREATE_QUESTION_COMPLETE:
                this.setState({isLoading: false});
                if (question.error) {
                    alert("error");
                } else {
                    alert("save success");
                }
                window.location.reload();
                break;
            default:
                return;
        }
    }

    updateNode = (value, x, y) => {
        for (let i = 0; i < this.state.numberMatrix; i++) {
            for (let j = 0; j < this.state.numberMatrix; j++) {
                if (i === x && j === y) {
                    this.state.node[i][j] = value;
                }
            }
        }
    };
    onBtnSaveClick = () => {
        let level = document.getElementById('levelFill').value;
        let time = document.getElementById('timeFill').value;
        let score = document.getElementById('scoreFill').value;
        let content = document.getElementById('contentFill').value;
        let answer = document.getElementById('answerFill').value;
        if (_.isEmpty(level) || _.isEmpty(time) || _.isEmpty(score) || _.isEmpty(content) || _.isEmpty(answer) || score <= 0 || time <= 0 || level <= 0) {
            alert("Error");
            return;
        }
        const {dispatch} = this.props;
        let payload = {
            content: content, matrix: this.state.node,
            time: time, score: score, answer: answer.trim(), level: level
        };
        dispatch(postCreateQuestion(payload));
    };
    onBtnGetGameClick = (mean) => {
        let matrix = this.getMatrixWithMeanWord(mean);
        matrix = this.getMatrixRandomChar(matrix);
        this.setState({node: matrix});
    };

    render() {
        let {isLoading} = this.state;
        let questions =
            <Fragment>
                <Container id="questions">
                    <Row className="flex-column justify-content-center align-items-center d-flex">
                        <Col md={{size: 5}}>
                            <ContentQuestionComponent/>
                        </Col>
                        <Col md={3} className={"mt-1"}>
                            <AnswerComponent onBtnGetGameClick={this.onBtnGetGameClick}/>
                        </Col>
                        <Col md={{size: 12}} className="flex-column justify-content-center align-items-center d-flex">
                            {
                                this.state.node.map((row, rowIndex) => {
                                    return <div>
                                        {
                                            row.map((col, colIndex) => {
                                                return <NodeComponent updateNode={this.updateNode} colIndex={colIndex}
                                                                      rowIndex={rowIndex} item={col}
                                                                      max={this.state.numberMatrix}/>
                                            })
                                        }
                                    </div>
                                })
                            }
                        </Col>
                        <Col md={{size: 5}} className="mt-2 mb-4">
                            <ScoreLevelTimeComponent/>
                            <Button onClick={this.onBtnSaveClick} color="success" size="lg" block>SAVE</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>;
        return (isLoading ? <LoadingAnimation/> : questions)
    }
}

const mapStateToProps = (state) => ({
    question: {...state.question}
});

export default connect(mapStateToProps)(Question)