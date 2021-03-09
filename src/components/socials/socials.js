import React from "react"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./socials.scss"

const Socials = () => {
    return(
        <ol className="socials">
            <li><a href="https://www.facebook.com/ThePintAndPony" aria-label="Facebook" target="_blank" rel="noreferrer"><FaFacebookF /></a></li>
            <li><a href="https://www.instagram.com/thepintandpony" aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
            <li><a href="https://twitter.com/ThePintAndPony" aria-label="Twitter" target="_blank" rel="noreferrer"><FaTwitter /></a></li>
        </ol>
    )
}

export default Socials