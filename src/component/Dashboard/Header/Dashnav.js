import React, {useState,useEffect} from 'react';
import './dashnav.css';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from "@material-ui/icons/Search";
import Avatar from '@material-ui/core/Avatar';
import {Link, NavLink} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import axios from 'axios';

function Dashnav() {
    const username = localStorage.getItem("username");

    const logout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('userid')
        window.location.href = '/'
    }
    return (
        <div className="dashnav">
            <div className="dashnav__main">
                <div className="dashnav__logo">
                    <Link to='/' className='web-navbar-logo' >
                        Logistic<i class='fab fa-typo3' />
                    </Link>
                </div>
                <div className="dashnav-menu">
                    <NavLink className="dashnav-menu-item" exact activeClassName="active" to="/my/order"><span>My Order</span></NavLink>
                    <NavLink className="dashnav-menu-item" exact activeClassName="active" to="/our/service"><span>Our Services</span></NavLink>
                    <NavLink className="dashnav-menu-item" exact activeClassName="active" to="/our/contact"><span>Contact</span></NavLink>
                </div>
                <div className="dashnav-search">
                    <input placeholder="search" />
                    <SearchIcon className="dashnav-search-icon" style={{height:"25px", width:"25px"}}/>
                </div>
                <div className="dashnav-account">
                    <Dropdown>
                        <Dropdown.Toggle  className="dashnav-account-dropdown">
                            <p>{username}</p>
                            <Avatar className="dashnav-account-item" src="https://res.cloudinary.com/rojgar-com/image/upload/v1628952253/rrgdmlc02wlqpyairxr4.jpg"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dashnav-account-dropdown-item">
                            <Dropdown.Item href="/my/account"  className="dashnav-account-dropdown-btn"><EditIcon style={{ height: '22px', width: '22px' }} className="nav-menu-item-icon"/>Update Details</Dropdown.Item>
                            <Dropdown.Item href="/update/password/info"  className="dashnav-account-dropdown-btn"><EditIcon style={{ height: '22px', width: '22px' }} className="nav-menu-item-icon"/> Change Password</Dropdown.Item>
                            <Dropdown.Item onClick={logout}  className="dashnav-account-dropdown-btn"><PowerSettingsNewIcon style={{ height: '22px', width: '22px' }} className="nav-menu-item-icon"/>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> 
                </div>
            </div>
        </div>
    )
}

export default Dashnav