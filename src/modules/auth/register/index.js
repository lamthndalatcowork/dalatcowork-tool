import React, {Fragment} from "react";
import styles from "./Register.module.css";

class RegisterPage extends React.Component {
    render(){
        return(
            <Fragment>
                <h1 className={styles.title}>Register</h1>
                <div>This is register page</div>
            </Fragment>
        )
    }
}

export default RegisterPage