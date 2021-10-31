import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Register = () => {

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
        
        <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
            <div className="card" style={{ width:'30%' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Register</h5>
                    <button className="btn btn-info w-100 mt-2 mb-2" onClick={handleGoogleLogin}>Sign In with Google</button>

                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>

        </div>
    );
};

export default Register;