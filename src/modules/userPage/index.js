import React, {Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types"
import {getUser} from "./action";
import {GET_USER_COMPLETE} from "../../actionTypes";

class UserPage extends React.Component {

    state = {
        users:[],
    };

    componentWillMount() {
        this.props.getUser();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        switch (nextProps.users.type) {
            case GET_USER_COMPLETE:
                this.setState({users: nextProps.users.result.data});
                console.log(nextProps.users.result.data);
                break;
            default:
                return;
        }
    }

    render() {
        return (
            <Fragment>
                <ul>
                    {
                        this.state.users.map(item=>{
                            return<li>{item.username}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    users: {...state.users}
});
const mapDispatchToProps = dispatch => ({
    getUser: () => dispatch(getUser())
});

UserPage.propTypes = {
    getUser: PropTypes.func
};

export default connect(mapStateToProps,mapDispatchToProps)(UserPage)