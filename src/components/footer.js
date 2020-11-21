import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    description
                }
            }
        }
    `)
    return (
        <footer className={footerStyles.footer}>
            <p>Created by {data.site.siteMetadata.description} © 2020</p>
        </footer>
    )
}

export default Footer