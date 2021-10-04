import React, {useState} from 'react';
import './dashboard.css';
import {Link} from "react-router-dom";

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="dashboard-add-post">
                <h1>My Deliveries</h1>
                <Link to="/add/delivery"><button>Add Delivery</button></Link>
            </div>
            <div className="dashboard-post">
                <div className="dashboard-post-individual">
                    <h3>Product</h3>
                    <h4>Product Quantity : 20</h4>
                    <div className="dashboard-post-items">
                        <h4>Pickup Address :  Baluwatar</h4>
                        <h4>Delivery Address : Sinamangal</h4>
                    </div>
                    <h4>Receiver Phone : 984478291</h4>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
