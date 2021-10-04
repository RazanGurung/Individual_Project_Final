import React from 'react';
import { useParams,useHistory } from 'react-router-dom';
import axios from "axios";
import "./home.css";

function EmailVerification() {
    const history = useHistory();
    const params = useParams();
    const token = params.token;
    const VerifyEmail= ()=>{
        axios.put("http://localhost:8000/user/confirm/"+token).then(data=>{
            console.log("verification done")
            history.push("/login")
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="email-verification-container">
            <h1>Please Verify Your Email</h1>
            <p>Click verify button to verify your email.</p>
            <button onClick={VerifyEmail}>Verify Email</button>
        </div>
    )
}

export default EmailVerification
