import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import CardButton from "../components/card-button/card-button"

// icons
import champagneIcon from "../images/icons/champagne-icon.svg"

const AboutPage = () => {
    return (
        <Layout>
        
            <Hero title="About us" />

            <main className="container internal-main">

                <div className="row">
                    <div className="col-lg-8">
                        <h2>The idea</h2>
                        <p>The neighbourhood micro pub vibe, serving the best in local real ales, beers, gins &amp; wines personalized to your tastes.</p>
                        <p>Serving your favourite local craft ale to you and your friends at that big birthday, or pouring a fine Sussex or Kent sparkling wine to guests at your wedding and everything in-between</p>
                        <hr />
                        <h2>The guys</h2>
                        <p>The Pint & Pony is the brainchild and creation of Duran Gregg, and Tom, mates form sunny Sussex on the South Coast</p>
                        <p>Seeing the demand for a unique Mobile Micro Pub whilst researching services for their own events gave the guys the drive to combine their creative, design and engineering expertise to produce the Pint & Pony.</p>
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