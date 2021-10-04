import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./delivery.css"

function PostDelivery() {
    const [product, setProduct] = useState()
    const [productqty, setProductqty] = useState()
    const [receiver, setReceiver] = useState()
    const [pickupaddress, setPickupaddress] = useState()
    const [deliveryaddress, setDeliveryaddress] = useState()
    const [phone, setPhone] = useState()
    const [username, setUsername] = useState()
    const id = localStorage.getItem("id")

    useEffect(() => {
        axios.get("http://localhost:8000/get/user/"+id).then(data=>{
            setUsername(data.data.firstname+" "+data.data.lastname)
            setPhone(data.data.phone)
            console.log(data)
        }).catch(err=>{
            console.log(err)
        })
    }, [])
    const postDelivery = () =>{
        const data = {
            username:username,
            phone:phone,
            receiver:receiver,
            pickupaddress:pickupaddress,
            deliveryaddress:deliveryaddress,
            product:product,
            productQty:productqty,
            id:id
        }
        axios.post("http://localhost:8000/add/delivery",data).then(results=>{
            alert("successfully posted deliveries.")
        }).catch(err=>{
            alert("successfully posted deliveries.")
        })
    }
    return ( 
        <div className="delivery-add-form">
            <h1>Delivery Form</h1>
                <div className="register__option">
                    <label className="register__label">Good or Product</label>
                    <input  name="Product"  type="text" placeholder="Good or Product" value={product} onChange={(e)=> setProduct(e.target.value)}/> 
                </div>
                <div className="register__option">
                    <label className="register__label">Product Quantity</label>
                    <input type="number" placeholder="Product Quantity" value={productqty} onChange={(e)=> setProductqty(e.target.value)}/>
                </div>
                <div className="register__option">
                    <label className="register__label">Receiver's Number</label>
                    <input  name="phone" id="phone" type="tel" placeholder="Phone Number" value={receiver} onChange={(e)=> setReceiver(e.target.value)}/> 
                </div>
                <div className="register__option">
                    <label className="register__label">Pickup Address</label>
                    <input   type="text" placeholder="Pickup Address" value={pickupaddress} onChange={(e)=> setPickupaddress(e.target.value)}/>
                </div>
                <div className="register__option">
                    <label className="register__label">Delivery Address</label>
                    <input  type="text" placeholder="Delivery Address" value={deliveryaddress} onChange={(e)=> setDeliveryaddress(e.target.value)}/> 
                </div>
            <button onClick={postDelivery}>Post Deliveries</button>
        </div>
    )
}

export default PostDelivery
