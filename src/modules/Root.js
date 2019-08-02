import React, {Fragment} from 'react';
import {renderRoutes} from "react-router-config";

class Root extends React.Component {
    render() {
        return (
            <Fragment>
                <h1>Dalatcowork</h1>
                {renderRoutes(this.props.route.routes)}
            </Fragment>
        )
    }
}
export default Root