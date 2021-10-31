import React from 'react';
import useAuth from '../../Hook/useAuth';
import './Login.css'
const Login = () => {
    const { handleGoogleLogin } = useAuth()
    return (
        <div className="align-middle mt-5">
            <div classNam="login-part  ">
                <h1 className="text-warning">Login To Your Account<br /> <span className="text-dark">With Google</span> </h1>

                <button onClick={handleGoogleLogin} className="btn btn-danger mt-5"><i className=" fab fa-google-plus-g"></i> Login With Google</button>
            </div>

        </div>
    );
};

export default Login;