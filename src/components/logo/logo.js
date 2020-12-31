import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import logoImage from "../../images/logo.svg"
import logoStyles from "./logo.module.scss"

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
            <Link to="/">
                <img src={logoImage} alt={data.site.siteMetadata.title}/>
            </Link>
        </div>
    )
}

export default Logo