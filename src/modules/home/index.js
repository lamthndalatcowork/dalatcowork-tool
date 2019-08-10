import React, {Fragment} from "react";
import styles from "./Home.module.css"
import PropTypes from "prop-types"
import {connect} from "react-redux";
import {loadHome} from "./actions";
import LoadingAnimation from "../animations/Loading";
import {HOME_COMPLETE, HOME_REQUEST} from "../../actionTypes";
import { Button } from 'reactstrap';
class HomePage extends React.Component {
    state = {
        isLoading: false
    };

    componentWillMount() {
        this.props.loadHome();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        switch (nextProps.home.type) {
            case HOME_REQUEST:
                this.setState({isLoading: nextProps.home.isFetching});
                break;
            case HOME_COMPLETE:
                this.setState({isLoading: nextProps.home.isFetching});
                break;
            default:
                return;
        }
    }

    render() {
        const {isLoading} = this.state;
        const Content = () => (
            <Fragment>
                <h1 className={styles.title}>Home</h1>
                <div>This is home</div>
                <Button color="danger">Danger!</Button>
            </Fragment>
        );
        return (isLoading ? <LoadingAnimation/> : <Content/>)
    }
}

const mapStateToProps = state => ({
    home: {...state.home}
});
const mapDispatchToProps = dispatch => ({
    loadHome: () => dispatch(loadHome())
});

HomePage.propTypes = {
    loadHome: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)