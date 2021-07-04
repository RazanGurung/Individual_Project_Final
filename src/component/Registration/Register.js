import React from 'react'

function Register() {
    return (
        <div className="form-container">
            <div className="form-register">
                <h1>Sign Up</h1>
                <p>Connect with us to use our Services</p>
                <div className="sub-form">
                   <div className="option">
                        <label>First Name</label>
                        <input type="text" name="firstname"  placeholder="First Name" required="" />
                   </div>
                   <div className="option">
                        <label>Last Name</label>
                        <input type="text" name="lastname"  placeholder="Last Name" required="" />
                   </div>
                </div>
                <label>Email Address</label>
                <input type="email" name="Email"  placeholder="Email" required="" />
                <div className="sub-form">
                   <div className="option">
                        <label>Address</label>
                        <input type="text" name="address"  placeholder="Address" required="" />
                   </div>
                   <div className="option">
                        <label>Phone No</label>
                        <input type="tel" name="phone"  placeholder="Phone No" required="" />
                   </div>
                </div>
                <label>Password</label>
                <input type="password" name="Password" placeholder="Password" required="" />
                <label>Confirm Password</label>
                <input type="password" name="Password" placeholder="Password" required="" />
                <button>login</button>
            </div>
        </div>
    )
}

export default Register
