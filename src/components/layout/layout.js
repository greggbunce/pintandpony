import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import SEO from "../seo/seo"

import Consent from "../cookie-consent/cookie-consent"

import "../../scss/reset.scss"
import "../../scss/global.scss"
import layoutStyles from "./layout.module.scss"

const Layout = (props) => {
    return (
        <>
            <Consent />
            <div className={`${layoutStyles.layout} ${layoutStyles[props.class]}`}>
                <SEO />
                <Header />
                <section className={layoutStyles.section}>
                    {props.children}
                </section>
                <Footer />
            </div>
        </>
    )
}

export default Layout