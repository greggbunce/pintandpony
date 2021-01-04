import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import logoImage from "../../images/logo.svg"
import logoStyles from "./logo.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Logo = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    
    return (
        <div className={logoStyles.logo}>
            <AniLink paintDrip hex="#DEE2E6" duration={0.8} to="/">
                <img src={logoImage} alt={data.site.siteMetadata.title}/>
            </AniLink>
        </div>
    )
}

export default Logo