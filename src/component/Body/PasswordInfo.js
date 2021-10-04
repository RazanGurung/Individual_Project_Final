import React,{useState} from 'react';
import axios from "axios";

function PasswordInfo() {
    const [oldpassword, setoldpassword] = useState()
    const [newpassword, setnewpassword] = useState()
    const id = localStorage.getItem("id")

    const logout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('id')
        window.location.href = '/'
    }
    const updatePassword =()=>{
        const data ={
            oldpassword:oldpassword,
            newpassword:newpassword
        }
        axios.put("http://localhost:8000/user/update/password/"+id,data).then(res=>{
            logout();
        }).catch(err=>{
            alert(err);
        })
    }
    return (
        <div className="email-verification-container">
            <div className="update-container">
                <h2 style={{"marginBottom":"30px"}}>Password Update</h2>
                <label style={{"float":"left"}}>Old Password</label>
                <input type="password" placeholder="old password" value={oldpassword} onChange={(e)=>setoldpassword(e.target.value)}/>
                <label>New Password</label>
                <input type="password" placeholder="new password"/>
                <label>Confirm Password</label>
                <input type="password" placeholder="confirm password" value={newpassword} onChange={(e)=>setnewpassword(e.target.value)}/>
                <button onClick={updatePassword}>Update Password</button>
            </div>
        </div>
    )
}

export default PasswordInfo