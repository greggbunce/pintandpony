import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import navbarStyles from "./navbar.scss"
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {

    const [mode, setMode] = useState(); 
    useEffect(() => {
        if (mode === 'navActive') {
            document.body.classList.add('navActive');
        } else {
            document.body.classList.remove('navActive');
        }
        localStorage.setItem('mode', mode);
    }, [mode]);

    return (
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setMode(mode === 'navActive' ? '' : 'navActive')} />
            <Navbar.Collapse id="basic-navbar-nav" className={navbarStyles.navWrapper}>
                <ul className="navList">
                    <li><Link className="navItem" activeClassName="active" to="/about">About</Link></li>
                    <li><Link className="navItem" activeClassName="active" to="/packages">Packages</Link></li>
                    <li><Link className="navItem" activeClassName="active" to="/blog">Blog</Link></li>
                    <li><Link className="navItem navCta" activeClassName="active" to="/contact">Contact</Link></li>
                </ul>
            </Navbar.Collapse>
        </Navbar>
    )
  }
  
  export default Navigation