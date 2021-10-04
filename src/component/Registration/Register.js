import React, {useState} from 'react'
import axios from 'axios';
import {useHistory} from "react-router-dom";

function Register() {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();
    const sendInfo =()=>{
        const data = {
            firstname:firstname,
            lastname:lastname,
            email:email,
            address:address,
            phone:phone,
            password:password
        }
        axios.post("http://localhost:8000/user/register",data).then(response=>{
            history.push("/verify/info")
        }).catch(err=>{
            alert("Email Already Used")
        })
    }

    return (
        <div className="form-container">
            <div className="form-register">
                <h1>Sign Up</h1>
                <p style={{color:"black"}}>Connect with us to use our Services</p>
                <div className="sub-form">
                   <div className="option">
                        <label>First Name</label>
                        <input type="text" name="firstname"  placeholder="First Name" required="" value={firstname} onChange={(e)=> setFirstName(e.target.value)}/>
                   </div>
                   <div className="option">
                        <label>Last Name</label>
                        <input type="text" name="lastname"  placeholder="Last Name" required="" value={lastname} onChange={(e)=> setLastName(e.target.value)}/>
                   </div>
                </div>
                <label>Email Address</label>
                <input type="email" name="Email"  placeholder="Email" required="" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <div className="sub-form">
                   <div className="option">
                        <label>Address</label>
                        <input type="text" name="address"  placeholder="Address" required="" value={address} onChange={(e)=> setAddress(e.target.value)}/>
                   </div>
                   <div className="option">
                        <label>Phone No</label>
                        <input type="tel" name="phone"  placeholder="Phone No" required="" value={phone} onChange={(e)=> setPhone(e.target.value)}/>
                   </div>
                </div>
                <label>Password</label>
                <input type="password" name="Password" placeholder="Password" required="" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <label>Confirm Password</label>
                <input type="password" name="Password" placeholder="Password" required="" />
                <button onClick={sendInfo}>Register</button>
            </div>
        </div>
    )
}

export default Register
