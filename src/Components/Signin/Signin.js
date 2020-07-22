import React from 'react';
import{connect} from 'react-redux';

import {setSignInEmail, setSignInPassword} from './actions';

const mapStateToProps = state => {
    return {
        signInEmail: state.setSignInEmail.signInEmail,
        signInPassword: state.setSignInPassword.signInPassword,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onEmailChange: (event) => dispatch(setSignInEmail(event.target.value)),
        onPasswordChange: (event) => dispatch(setSignInPassword(event.target.value)),
    }
}

class Signin extends React.Component {

    onSubmitSignIn = () => {
        fetch('https://quiet-dusk-48514.herokuapp.com/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.props.signInEmail,
                password: this.props.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('signedin');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0 center">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email"
                                name="email-address"
                                id="email-address"
                                onChange={this.props.onEmailChange} />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password"
                                name="password"
                                id="password"
                                onChange={this.props.onPasswordChange} />
                        </div>
                    </fieldset>
                    <div className="center">
                        <input
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Sign In"
                            onClick={this.onSubmitSignIn}
                        />
                    </div>
                    <div className="lh-copy mt3 center">
                        <p onClick={() => onRouteChange('register')} className="pointer f6 link dim black db">Register</p>
                    </div>
                </main>
            </article>
        );

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
