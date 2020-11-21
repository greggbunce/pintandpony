import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>The Pint & Pony.</h1>
      <h2>The Pint & Pony is a luxury horsebox conversion, offering a mobile bar service tailored to your needs!</h2>
      <p>We service all events from weddings, birthdays, private parties, corporate events and anything in between. Offering a Full Bar service across the UK.</p>
      <button><Link to="/contact">Enquire Now</Link></button>
    </Layout>
  )
}

export default IndexPage