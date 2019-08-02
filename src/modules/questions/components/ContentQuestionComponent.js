import React, {Fragment} from 'react'
import Input from "reactstrap/es/Input";
import Label from "reactstrap/es/Label";
import FormGroup from "reactstrap/es/FormGroup";

class ContentQuestionComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ""
        };
    }

    onInputContentChange = (e) => {
        this.setState({content: e.target.value})
    };

    render() {
        let {content} = this.state;
        return (
            <Fragment>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <Label for="contentFill" className="mr-2"><h1>Questions</h1></Label>
                    < div className="mb-2"><h4>{content}</h4></div>
                </div>
                <FormGroup>
                    <Input type="text" id="contentFill" value={content}
                           onChange={this.onInputContentChange}
                           name="questions" placeholder="your question"/>
                </FormGroup>
            </Fragment>
        )
    }
}

export default ContentQuestionComponent