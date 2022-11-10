import React from 'react';
import { connect } from 'react-redux';
import { loginThunkCreator } from '../../../../redux/AuthReducer';
import Login from './Login';
class LoginContainer extends React.Component {
    render() {
        return (
            <Login loginThunkCreator={this.props.loginThunkCreator}/>
        );
    }
}

export default connect(null,{loginThunkCreator})(LoginContainer);
