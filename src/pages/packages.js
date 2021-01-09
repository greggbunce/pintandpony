import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import CardButton from "../components/card-button/card-button"

// icons
import pintIcon from "../images/icons/pint-icon.svg"
import wineIcon from "../images/icons/wine-icon.svg"
import champagneIcon from "../images/icons/champagne-icon.svg"

const Packages = () => {
    return (
        <Layout>

            <Hero title="Packages" />

            <main className="container internal-main">

                <div className="row">
                    <div className="col-md-12">
                        <h2 className="align-center">We have the package that's right for you</h2>
                        <p className="align-center">For all events, big and small, we have the right options for you</p>
                        <hr />
                    </div>
                </div>

                <div className="row equalized-components">
                    <div className="col-lg-4">
                        <CardButton colour="teal" title="Pay bar" buttonLink="/contact" buttonText="Enquire now" icon={pintIcon} columnWidth="small">
                            <h5>£99 deposit</h5>
                            <p>Just what you would expect to find at your local. House wines, a range of spirits & mixers, as well as up to two draft or cask beers / ciders of your choice.</p>
                            <p><small><i>Minimum spend £300</i></small></p>
                        </CardButton>
                    </div>
                    <div className="col-lg-4">
                        <CardButton colour="green" title="Free bar" buttonLink="/contact" buttonText="Find out more" icon={wineIcon} columnWidth="small">
                            <h5>From £35 PP</h5>
                            <p>Create a busy dance floor with our fully inclusive free bar package. Unlimited drinks, cocktails and gin throughout the service hours you require. -- NEED TO CHANGE THIS COPY AS ITS RIPPED OFF</p>
                        </CardButton>
                    </div>
                    <div className="col-lg-4">
                        <CardButton colour="teal" title="Tab bar" buttonLink="/contact" buttonText="Enquire now" icon={champagneIcon} columnWidth="small">
                            <h5>From £50</h5>
                            <p>Treat your guests to free drinks throughout the duration of your tab and enjoy a discount to your deposit. -- NEED TO CHANGE THIS COPY AS ITS RIPPED OFF</p>
                        </CardButton>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <p>maybe a list of what we include as standard... draft / cask beer &amp; cider, 'professional' staff etc?</p>
                        <p>We also offer special cocktail, gin, wine &amp; craft beer bar options. Click <Link to="/contact">here to find out more</Link> (THIS WILL LINK TO A NEW PAGE - NOT YET BUILT)</p>
                    </div>
                </div>



            </main>
        </Layout>
    )
}

export default Packages