import React from 'react'
import background from "../../images/hero_bg_1.jpg"
import  'jquery';
import "../css/aos.css";
import "../css/style.css";

function Home() {
    return (
        <div>
            <div class="site-blocks-cover overlay" style={{ backgroundImage: `url(${background})` }} >
                <div class="container">
                    <div class="row align-items-center justify-content-center text-center">
                        <div class="col-md-8" data-aos="fade-up" data-aos-delay="400">
                            <h1 class="text-white font-weight-light mb-5 text-uppercase font-weight-bold">Worldwide Freight Services</h1>
                            <p><a href="#" class="btn btn-primary py-3 px-5 text-white">Get Started!</a></p>
                        </div>
                    </div>
                </div>
            </div>  

            <div class="container">
                <div class="row align-items-center no-gutters align-items-stretch overlap-section">
                    <div class="col-md-4">
                    <div class="feature-1 pricing h-100 text-center">
                        <div class="icon">
                        <span class="icon-dollar"></span>
                        </div>
                        <h2 class="my-4 heading">Best Prices</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsum odio minima tempora animi iure.</p>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="free-quote bg-dark h-100">
                        <h2 class="my-4 heading  text-center">Get Free Quote</h2>
                        <form method="post">
                            <div class="form-group">
                                <label for="fq_name">Name</label>
                                <input type="text" class="form-control btn-block" id="fq_name" name="fq_name" placeholder="Enter Name"></input>
                            </div>
                            <div class="form-group mb-4">
                                <label for="fq_email">Email</label>
                                <input type="text" class="form-control btn-block" id="fq_email" name="fq_email" placeholder="Enter Email"></input>
                            </div>
                            <div class="form-group">
                                <input type="submit" class="btn btn-primary text-white py-2 px-4 btn-block" value="Get Quote"></input>
                            </div>
                        </form>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="feature-3 pricing h-100 text-center">
                        <div class="icon">
                        <span class="icon-phone"></span>
                        </div>
                        <h2 class="my-4 heading">24/7 Support</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsum odio minima tempora animi iure.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
