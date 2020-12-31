import React from "react"
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import footerStyles from "./footer.module.scss"

const Footer = () => {

    return (
        <footer className={footerStyles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ol>
                            <li><a aria-label="Facebook" href="https://www.facebook.com/ThePintAndPony" target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
                            <li><a aria-label="Instagram" href="https://www.instagram.com/thepintandpony" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </footer>
    )
    
}

export default Footer