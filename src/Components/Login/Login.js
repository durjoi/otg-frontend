import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Login = () => {

    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory()

    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
    signInUsingGoogle().then(result => {
        history.push(redirect_uri);
    }).catch(function (error) {
        console.error(error);
        });
    }

    return (
        <div className="App">
            <header className="App-header">
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <button className="btn btn-info w-100 mt-2 mb-2" onClick={handleGoogleLogin}>Sign In with Google</button>
            
            </header>
        </div>
    );
};

export default Login;