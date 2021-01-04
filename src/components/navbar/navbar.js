import React, { useEffect, useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
                    <li><AniLink paintDrip hex="#DEE2E6" duration={0.8} className="navItem" activeClassName="active" to="/about">About</AniLink></li>
                    <li><AniLink paintDrip hex="#DEE2E6" duration={0.8} className="navItem" activeClassName="active" to="/packages">Packages</AniLink></li>
                    <li><AniLink paintDrip hex="#DEE2E6" duration={0.8} className="navItem" activeClassName="active" to="/blog">Blog</AniLink></li>
                    <li><AniLink paintDrip hex="#DEE2E6" duration={0.8} className="navItem navCta" activeClassName="active" to="/contact">Contact</AniLink></li>
                </ul>
            </Navbar.Collapse>
        </Navbar>
    )
  }
  
  export default Navigation