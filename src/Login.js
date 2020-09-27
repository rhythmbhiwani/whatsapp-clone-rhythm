import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [{ user }, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            }))
            .catch(error => alert(error.message));
    };

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
            dispatch({
                type: actionTypes.SET_USER,
                user: userAuth,
            });
        });
    }, [user]);

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Logo" />
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    );
}

export default Login;
