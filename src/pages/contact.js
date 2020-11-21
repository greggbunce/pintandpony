import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

const ContactPage = () => {
    return(
        <Layout>
            <h1>Coming soon.</h1>
            <h2>We are currently in the process of transforming our old horse trailer into the perfect mobile bar for all your event needs!</h2>
            <p>The transformation will be complete by January 2021 and our stunning mobile bar will be available for hire. So feel free to get in touch or follow us on social media for updates.</p>
            <p>Once complete, The Pint and Pony will offer a full bar service thought the year to Sussex, Hampshire, Kent, Surrey, Dorset and across the UK.</p>
            <button><Link to="/contact">Enquire Now</Link></button>
        </Layout>
    )
}

export default ContactPage