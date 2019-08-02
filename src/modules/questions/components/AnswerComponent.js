import React, {Fragment} from 'react'
import FormGroup from "reactstrap/es/FormGroup";
import Input from "reactstrap/es/Input";
import Label from "reactstrap/es/Label";
import Button from "reactstrap/es/Button";

class AnswerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answerContent:""
        };
    }
    onInputContentChange = (e) => {
        this.setState({answerContent: e.target.value.toUpperCase()})
    };
    onBtnGetGameClick = () =>{
        if(this.state.answerContent !== "")
            this.props.onBtnGetGameClick(this.state.answerContent);
        else{
            document.getElementById('answerFill').focus();
        }
    };

    render() {
        let {answerContent} = this.state;
        return (
            <Fragment>
                {/*<div className="d-flex flex-column justify-content-center align-items-center">*/}
                {/*    /!*<Label for="answerFill" className="mr-2"><h5>Answer</h5></Label>*!/*/}
                {/*    < div className="mb-2">{answerContent}</div>*/}
                {/*</div>*/}
                <FormGroup>
                    <Input type="text" className="text-center" id="answerFill" value={answerContent}
                           onChange={this.onInputContentChange}
                           name="questions" placeholder="your answer"/>
                </FormGroup>
                <FormGroup className="text-center">
                    <Button onClick={this.onBtnGetGameClick}>GET GAME</Button>
                </FormGroup>
            </Fragment>
        )
    }
}

export default AnswerComponent