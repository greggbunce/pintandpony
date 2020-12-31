import React from "react"
import Header from "../header/header"
import Footer from "../footer/footer"
import "../../scss/reset.scss"
import "../../scss/global.scss"
import layoutStyles from "./layout.module.scss"

const Layout = (props) => {
    return (
        <div className={`${layoutStyles.layout} ${layoutStyles[props.class]}`}>
            <Header />
            <section className={layoutStyles.section}>
                {props.children}
            </section>
            <Footer />
        </div>
    )
}

export default Layout