import React, {useState ,useEffect } from 'react';
import axios from "axios";
import "./account.css";

function Account() {
    const id = localStorage.getItem("id")
    const [firstname, setfirstname] = useState()
    const [lastname, setlastname] = useState()
    const [address, setaddress] = useState()
    const [phone, setphone] = useState()
    const [email, setemail] = useState()
    useEffect(() => {
        axios.get("http://localhost:8000/get/user/"+id).then(data=>{
            setfirstname(data.data.firstname)
            setlastname(data.data.lastname)
            setaddress(data.data.address)
            setemail(data.data.email)
            setphone(data.data.phone)
        }).catch(err=>{
            console.log(err)
        })
    }, [])

    const userUpdate = ()=>{
        const data = {
            firstname:firstname,
            lastname:lastname,
            address:address,
            phone:phone
        }
        axios.put("http://localhost:8000/user/update/"+id, data).then(result=>{
            alert("successfully updated");
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className="account-container">
            <div className="account-detail"> 
                <div className="account-profile">
                    <img src="https://res.cloudinary.com/rojgar-com/image/upload/v1628952253/rrgdmlc02wlqpyairxr4.jpg" />
                </div>
                <div className="account-info">
                    <h4>FirstName : {firstname}</h4>
                    <h4>LastName  : {lastname}</h4>
                    <h4>Address   : {address}</h4>
                    <h4>Phone     : {phone}</h4>
                    <h4>Email     : {email}</h4>
                </div>
            </div>
            <div className="account-detail-update">
                <h2>Update Your Information </h2>
                <div className="option">
                    <label>FirstName</label>
                    <input placeholder="firstname" value={firstname} onChange={(e)=>setfirstname(e.target.value)} />
                </div>
                <div className="option">
                    <label>LastName</label>
                    <input placeholder="lastname" value={lastname} onChange={(e)=>setlastname(e.target.value)}/>
                </div>
                <div className="option">
                    <label>Address</label>
                    <input placeholder="address" value={address} onChange={(e)=>setaddress(e.target.value)}/>
                </div>
                <div className="option">
                    <label>Phone</label>
                    <input placeholder="phone" value={phone} onChange={(e)=>setphone(e.target.value)}/>
                </div>
                <button onClick={userUpdate}>Update Details</button>
            </div>
        </div>
    )
}

export default Account

