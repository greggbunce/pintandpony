import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <h1>About Page</h1>
            <p>This is the about page with all the content you need to know about everything</p>
            <p>This is a link to the contact page using the Gatsby link methord <Link to="/contact">contact</Link></p>
        </Layout>
    )
}

export default AboutPage