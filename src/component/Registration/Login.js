import React from 'react'
import './registration.css';
import {GoogleLoginButton} from "react-social-login-buttons";
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="form-container">
            <div className="form">
                <h1>Login</h1>
                <p>Connect with us to use our Services</p>
                <label>Email Address</label>
                <input type="email" name="Email"  placeholder="Email" required="" />
                <label>Password</label>
                <input type="password" name="Password" placeholder="Password" required="" />
                <div className="checkbox">
                    <input type="checkbox" />
                    <label>Remember Me</label> 
                </div>   
                <button>login</button>
                <div className="social-account">Or Continue with your social account</div>
                <GoogleLoginButton className="social-login" />
                <div className="forget">
                    <Link to="/signup" className="label">Sign up</Link>
                    <span >|</span>
                    <Link to="/signup" className="label">Forget Password?</Link>
                </div>
            </div>  
        </div>
    )
}
export default Login
