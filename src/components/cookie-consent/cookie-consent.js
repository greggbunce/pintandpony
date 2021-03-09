import React from "react"
import CookieConsent from "react-cookie-consent";
import { FaTimes } from "react-icons/fa";
import "./cookie-consent.scss"

const Consent = () => {
    return (
        <div className="container">
            <CookieConsent
                disableStyles
                containerClasses="row consent-wrapper"
                contentClasses="col-lg-9 consent-content"
                buttonWrapperClasses="col-lg-3 consent-buttons"
                enableDeclineButton={true}
                flipButtons={true}
                buttonText="🍪 Accept"
                buttonClasses="accept-button"
                declineButtonText={<FaTimes />}
                declineButtonClasses="decline-button"
                cookieName="gatsby-gdpr-google-analytics">
                We care about your data, we only use cookies to improve user experience. <a href="/privacy-policy" target="_blank">Find out more</a>.
            </CookieConsent>
        </div>
    )
}

export default Consent