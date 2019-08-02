import React,{Fragment} from 'react'
import style from "./../styles.css";
import Button from "reactstrap/es/Button";
import Input from "reactstrap/es/Input";
class NodeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isEdit :false,
            stateValue : "",
        };
    }
    componentWillMount() {
        this.setState({isEdit:false,stateValue:this.props.item});
    }
    componentWillReceiveProps(nextProps) {
        this.setState({stateValue:nextProps.item})
    }

    onNodeClick = (e) =>{
        if(e.type === "blur"){
            this.setState({stateValue:e.target.value})
        }
        this.setState({isEdit:!this.state.isEdit});
    };
    onInputChange = (e) =>{
        let value = e.target.value;
        value = value.charAt(value.length-1);
        this.setState({stateValue:value.toUpperCase()});
        this.props.updateNode(value.toUpperCase(),this.props.rowIndex,this.props.colIndex);
    };

    render(){
        let {stateValue} = this.state;
        let breakPoin = this.props.max === this.props.colIndex+1 ? <br/>: "";
        return(
            <Fragment>
                {
                    this.state.isEdit ?
                        <Input onBlur={(e)=>this.onNodeClick(e)} onChange={this.onInputChange}
                               value = {stateValue} className={"m-1 input-node-question text-center" } autoFocus/>
                       :
                        <Button onClick={(e)=>this.onNodeClick(e)} color="primary" className={"m-1 button-node-question"}>{stateValue}</Button>
                }
                {breakPoin}
            </Fragment>
        )
    }
}
export default NodeComponent