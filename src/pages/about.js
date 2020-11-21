import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <h1>Meet the Team</h1>
            <h2>We’re Tom and Duran, the owners of The Pint & Pony. We are two mates from Sussex that have set up a mobile bar after struggling to find something for our own event at a reasonable price.</h2>
            <p>We're currently in the process of transforming our horse trailer into the perfect mobile bar for your event.</p>
            <p>We’re aiming to debut The Pint & Pony in early 2021, providing a full bar service with packages tailored to you.</p>
            <button><Link to="/contact">Enquire Now</Link></button>
        </Layout>
    )
}

export default AboutPage