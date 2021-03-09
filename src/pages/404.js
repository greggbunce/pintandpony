import React from "react"
import image from "../images/404.gif"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Button from "../components/button/button"

const pageNotFound = () => {
    return (
        <Layout>
            <Hero title="404">
                <h3>Something's broken!</h3>
            </Hero>
            <main className="container">
                <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 text-center">
                    <img src={image} alt="404" width="100%" style={{marginBottom: "20px"}} />
                    <Button link="/">Take me home</Button>
                </div>
                <div className="col-md-3"></div>
                </div>
            </main>
            
        </Layout>
    )
}

export default pageNotFound

