import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div className="contact">
            <h1>Contact Us</h1> 
            <p>Any questions or remarks? write a message.</p>
            <div id="contact-container">
                <div className="contact-info">
                    <h4>Contact Information</h4>
                    <p>Fill up the form and click send.</p>
                    <div className="icon-text">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span>9844478291</span>
                    </div>
                    <div className="icon-text">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <span>Logistic@gmail.com</span>
                    </div>
                    <div className="icon-text">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <span>baluwatar-4, kathmandu, Nepal</span>
                    </div>
                    <div className="social-media">
                        <a href="" className="icon-circle">
                            <i class="fab fa-facebook-f" aria-hidden="true"></i>
                        </a>
                        <a href="" className="icon-circle">
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href="" className="icon-circle">
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="" className="icon-circle">
                            <i class="fab fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <form>
                    <div className="col">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div className="form-group">
                            <label>Phone no </label>
                            <input type="tel" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>message</label>
                            <textarea></textarea>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group right">
                            <button>Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
