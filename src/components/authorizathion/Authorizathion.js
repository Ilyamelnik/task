import React from 'react';
import { connect } from 'react-redux';
import { setAuth } from '../../redux/actions/authActions';
import './Authorizathion.css';

class Authorizathion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
    }

    onChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    onChangeLogin(event) {
        this.setState({ login: event.target.value });
    }

    onSubmit(event) {

        const credentials = {
            'login': this.state.login,
            'password': this.state.password
        }

        this.props.setAuth(credentials);

    }

    componentWillReceiveProps = nextProps => {
        const { history, isAuthorized } = nextProps;
        if (isAuthorized) {
            history.push(`/mainprojects`);
        }
    }

    render() {
        return (
            <div className="Authorizathion">
                <div className='form'>
                    <p><input type="text" name="login" placeholder="login" value={this.state.login}
                        onChange={e => this.onChangeLogin(e)} /></p>
                    <p><input type="password" name="password" placeholder="password" value={this.state.password}
                        onChange={e => this.onChangePassword(e)} /></p>
                    <p><input className='submitButton' onClick={e => this.onSubmit(e)} type="submit" value="Login" /></p>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => {
    const { isAuthorized } = state.auth;

    return {
        isAuthorized,
    };
};

const mapDispatchToProsp = {
    setAuth,
}

export default connect(
    mapStateToProps,
    mapDispatchToProsp
)(Authorizathion);