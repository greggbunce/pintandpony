import React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"

const Packages = () => {
    return (
        <Layout>

            <Hero title="Prices" />

            <main className="container internal-main">

                <div className="row">
                    <div className="col-md-12">
                        <h1>This is the packages page</h1>
                    </div>
                </div>

            </main>
        </Layout>
    )
}

export default Packages