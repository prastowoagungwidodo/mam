import React, { Component } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';

class LoginContainer extends Component {
    render() {
        return <LoginView {...this.props} />;
    }
}

const mapStateToProps = state => ({
    ...state.app
});

export default connect(
    mapStateToProps
)(LoginContainer);
