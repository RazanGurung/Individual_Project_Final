import React, {useState,useEffect} from 'react';
import './dashnav.css';
import SearchIcon from "@material-ui/icons/Search";
import Avatar from '@material-ui/core/Avatar';
import {Link, NavLink} from "react-router-dom";
import {Dropdown} from "react-bootstrap";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';

function Dashnav() {
    const profile = localStorage.getItem("profile");
    const usertype = localStorage.getItem("usertype");

    const [search,setSearch]=useState(""); 

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
                    <NavLink className="dashnav-menu-item" exact activeClassName="active" to="/find-professional"><span>My Order</span></NavLink>
                    <NavLink className="dashnav-menu-item" exact activeClassName="active" to="/find-professional"><span>Our Services</span></NavLink>
                    <NavLink className="dashnav-menu-item" exact activeClassName="active" to="/user/progress"><span>Progress</span></NavLink>
                </div>
                <div className="dashnav-search">
                    <input placeholder="search" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <Link to={"/search-professional/"+search}><SearchIcon className="dashnav-search-icon" style={{height:"25px", width:"25px"}}/></Link>
                </div>
                <div className="dashnav-account">
                    <Dropdown>
                        <Dropdown.Toggle  className="dashnav-account-dropdown">
                            <p>Rajan Gurung</p>
                            <Avatar className="dashnav-account-item" src={profile}/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dashnav-account-dropdown-item">
                            <Dropdown.Item href="/user-account"  className="dashnav-account-dropdown-btn"><AccountCircleIcon style={{ height: '22px', width: '22px' }} className="nav-menu-item-icon"/>My Account</Dropdown.Item>
                            <Dropdown.Item onClick={logout}  className="dashnav-account-dropdown-btn"><PowerSettingsNewIcon style={{ height: '22px', width: '22px' }} className="nav-menu-item-icon"/>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> 
                </div>
            </div>
        </div>
    )
}

export default Dashnav