import React, {Fragment} from 'react'
import {Toast, ToastBody, ToastHeader} from "reactstrap";
import styles from "../stylesHome.css";
class LogItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getNumberFormat = (number) => {
        return new Intl.NumberFormat('vn-IN', {}).format(number)+" đ"
    };

    render() {
        let {log,typeUser} = this.props;
        return (
            <Fragment>
                    <Toast >
                        <ToastHeader className={log.type==="IN_CREATE"?"bg-success p-2 ":"bg-danger p-2"}>
                        </ToastHeader>
                        <ToastBody className="position-relative">
                            <div className="describe">{log.caption}</div>
                            <div className="money">{log.type==="IN_CREATE"?"+":"-"}{this.getNumberFormat(log.money)}</div>
                            {
                                typeUser === "ADMIN"?
                                    <div className="deleteButton" onClick={()=>{this.props.onDelete(log._id)}}><i className="fas fa-times-circle"></i></div>
                                    : ""
                            }
                        </ToastBody>
                    </Toast>
            </Fragment>
        )
    }
}

export default LogItemComponent