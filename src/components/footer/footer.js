import React from "react"
import footerStyles from "./footer.module.scss"
import Socials from "../socials/socials"

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Socials />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer