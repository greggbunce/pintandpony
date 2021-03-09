import React from "react"

// components
import Layout from "../../components/layout/layout"
import Hero from "../../components/hero/hero"
import CardComponent from "../../components/card/card"
import Button from "../../components/button/button"
// import Gallery from "../../components/gallery/gallery"
import SEO from "../../components/seo/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// icons
import champagneIcon from "../../images/icons/champagne-icon.svg"

const AboutPage = () => {
    return (
        <Layout>

            <SEO title="About our mobile bar" description="Check out who we are, and how we built a mobile bar, perfect for weddings & events" />
            
            <Hero title="About us" />

            <main className="container internal-main">

                <div className="row">
                    <div className="col-lg-8">
                        <h2>The idea</h2>
                        <p>The neighbourhood micro pub vibe, serving the best real ales, beers, spirits &amp; wines personalized to your requirements.</p>
                        <p>Serving your favourite craft ale to you and your friends at that big birthday, or pouring a fine Sussex sparkling wine to guests at your wedding, and everything in-between. The Pint & Pony is a fully mobile bar service, great for any event.</p>
                        <hr />
                        <h2>The guys</h2>
                        <p>The Pint & Pony is the brainchild and creation of Tom, Gregg, and Duran, two brothers and their mate form the South Coast of sunny Sussex.</p>
                        <p>Seeing the demand for a unique Mobile Micro Pub whilst researching services for their own events gave the guys the drive to combine their creative, design and engineering expertise to produce the Pint & Pony.</p>
                        <p>Find out more about the horesebox conversion on <AniLink paintDrip hex="#DEE2E6" duration={0.8} to="/blog">our blog</AniLink>.</p>
                    </div>
                    <div className="col-lg-4">
                        {/* 
                        <Gallery 
                            galleryType="build"
                            interval="3000"
                            fade=""
                            controls="true"
                            indicators=""
                        />
                        */}
                        <CardComponent colour="green" title="Let's chat!" icon={champagneIcon} columnWidth="small">
                            <p>Want to find out how we can be the perfect addition to your event? We would love to chat.</p>
                            <Button type="cta" embedded="true" link="/contact">Get in touch</Button>
                        </CardComponent>
                    </div>
                </div>


            </main>
        </Layout>
    )
}

export default AboutPage