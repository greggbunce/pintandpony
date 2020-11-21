import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../scss/reset.scss"
import "../scss/global.scss"
import layoutStyles from "./layout.module.scss"

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Header />
            <section className={layoutStyles.content}>
                {props.children}
            </section>
            <Footer />
        </div>
    )
}

export default Layout