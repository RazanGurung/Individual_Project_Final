import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../Design/Button';
import './header.css';

function Header() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);
    return (
        <nav className='web-navbar'>
                <div className="web-navbar-container">
                    <Link to='/' className='web-navbar-logo' >
                        Logistic<i class='fab fa-typo3' />
                    </Link>
                    <div className='web-menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'web-nav-menu active' : 'web-nav-menu'}>
                        <li className='web-nav-item'>
                            <NavLink to='/' exact activeClassName="active" className='web-nav-links' onClick={closeMobileMenu}>Home</NavLink>
                        </li>
                        <li className='web-nav-item'>
                            <NavLink to='/services' exact activeClassName="active" className='web-nav-links' onClick={closeMobileMenu}>Services</NavLink>
                        </li>
                        <li className='web-nav-item'>
                            <NavLink to='/contact' exact activeClassName="active" className='web-nav-links' onClick={closeMobileMenu}>Contacts</NavLink>
                        </li>
                        <li>
                            <NavLink to='/sign-in' exact activeClassName="active" className='web-nav-links-mobile' onClick={closeMobileMenu}>Sign IN</NavLink>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
                </div>
            </nav>
    )
}

export default Header
