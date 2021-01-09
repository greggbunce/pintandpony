import React from "react"
import headerStyles from "./header.module.scss"
import StickyHeader from "./stickyHeader"

import Logo from "../logo/logo"
import Navigation from "../navbar/navbar"

const Header = () => {
    return (
        
        <header className={headerStyles.header}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <StickyHeader />
                        <Logo />
                        <Navigation />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header