import React from 'react';
import useFirebase from '../../Hook/useFirebase';
import './Login.css'
const Login = () => {
    const { handleGoogleLogin } = useFirebase()
    return (
        <div >
            <div classNam="login-part mt-5">
                <h1 className="text-warning">Login To Your Account </h1>

                <button onClick={handleGoogleLogin} className="btn btn-danger"><i className=" fab fa-google-plus-g"></i> Login With Google</button>
            </div>

        </div>
    );
};

export default Login;