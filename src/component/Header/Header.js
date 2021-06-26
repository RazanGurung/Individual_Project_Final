import React from 'react';
import  'jquery';
import "../css/aos.css";
import "../css/style.css";


function Header() {
    return (
        <div className="site-wrap">
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                    <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>
            <header className="site-navbar py-3" role="banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-11 col-xl-2">
                            <h1 className="mb-0"><a href="index.html" class="text-white h2 mb-0">Logistics</a></h1>
                        </div>
                        <div className="col-12 col-md-10 d-none d-xl-block">
                            <nav className="site-navigation position-relative text-right" role="navigation">
                                <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                                    <li className="active"><a href="index.html">Home</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li className="has-children">
                                        <a href="services.html">Services</a>
                                        <ul className="dropdown">
                                            <li><a href="#">Air Freight</a></li>
                                            <li><a href="#">Ocean Freight</a></li>
                                            <li><a href="#">Ground Shipping</a></li>
                                            <li><a href="#">Warehousing</a></li>
                                            <li><a href="#">Storage</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="industries.html">Industries</a></li>
                                    <li><a href="blog.html">Login</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style={{position: 'relative', top: '3px'}}>
                            <a href="#" className="site-menu-toggle js-menu-toggle text-white">
                                <span className="icon-menu h3"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
