import React from 'react';
import useAuth from '../../Hook/useAuth';
import './Login.css'
const Login = () => {
    const { handleGoogleLogin, handleAppleLogin } = useAuth()
    return (
        <div className="align-middle mt-5">
            <div classNam="login-part  ">
                <h1 className="text-warning">Login To Your Account<br /> <span className="text-dark">With Google</span> </h1>

                <button onClick={handleGoogleLogin} className="btn btn-danger mt-5"><i className=" fab fa-google-plus-g"></i> Login With Google</button> <br />
                <button onClick={handleAppleLogin} className="btn btn-dark mt-5"><i class="fa-brands fa-apple"></i> Login With Apple</button> <br />

            </div>

        </div>
    );
};

export default Login;