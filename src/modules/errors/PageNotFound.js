import React, {Fragment} from "react";
import styles from "./PageNotFound.module.css";
import {Link} from "react-router-dom";

class PageNotFound extends React.Component {
    render() {
        return (
            <Fragment>
                <h1 className={styles.title}>Page Not Found</h1>
                <div className={styles.message}>Sorry! This page is not available.</div>
                <Link to={"/"}>Back to home</Link>
            </Fragment>
        )
    }
}

export default PageNotFound