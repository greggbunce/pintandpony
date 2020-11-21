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
            <p>{data.site.siteMetadata.description}</p>
        </footer>
    )
}

export default Footer