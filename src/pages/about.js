import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import CardButton from "../components/card-button/card-button"

// icons
import champagneIcon from "../images/icons/champagne-icon.svg"

const AboutPage = () => {
    return (
        <Layout>
        
            <Hero title="Meet the Team" />

            <main className="container internal-main">

                <div className="row">
                    <div className="col-lg-8">
                        <h2>We’re Tom and Duran, the owners of The Pint & Pony.</h2>
                        <p>We are two mates from Sussex that have set up a mobile bar after struggling to find something for our own event at a reasonable price.</p>
                        <p>We're currently in the process of transforming our horse trailer into the perfect mobile bar for your event.</p>
                        <p>We’re aiming to debut The Pint & Pony in early 2021, providing a full bar service with packages tailored to you.</p>
                    </div>
                    <div className="col-lg-4">
                        <CardButton colour="green" title="Let's chat!" buttonLink="/contact" buttonText="Get in touch" icon={champagneIcon}>
                            <p>Want to find out how we can be the perfect addition to your event? We would love to chat, drop us a line or give us a call.</p>
                        </CardButton>
                    </div>
                </div>


            </main>
        </Layout>
    )
}

export default AboutPage