import React,{useState} from 'react'
import './registration.css';
import {Link} from "react-router-dom";
import axios from 'axios';
import {useHistory} from "react-router-dom";

function AdminLogin() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    let history = useHistory();
    const loginUser=()=>{
        const data = {
            email:email,
            password:password
        }
        axios.post("http://localhost:8000/user/login",data).then(response=>{
            history.push("/")
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="form-container">
            <div className="form">
                <h1>Login</h1>
                <p>Connect with us to use our Services</p>
                <label>Email Address</label>
                <input type="email" name="Email"  placeholder="Email" required="" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" name="Password" placeholder="Password" required="" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <div className="checkbox">
                    <input type="checkbox" />
                    <label>Remember Me</label> 
                </div>   
                <button onClick={loginUser}>login</button>
            </div>  
        </div>
    )
}

export default AdminLogin
