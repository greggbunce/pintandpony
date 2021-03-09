import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from 'gatsby-background-image'

import heroStyles from "./hero.module.scss"

const Hero = (props) => {

    const data = useStaticQuery(graphql`
        query Image {
            file(relativePath: {eq: "images/hero.png"}) {
                childImageSharp {
                    fluid (
                        maxWidth: 1260
                        maxHeight: 715
                    ) {
                        srcSet
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    const backgoundImage = data.file.childImageSharp.fluid

    return (
        <BackgroundImage fluid={backgoundImage}>
        <div className={` ${heroStyles.hero} ${heroStyles[props.class]}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={heroStyles.heroContent}>
                            {props.iconBeforeTitle}
                            <h1>{props.title}</h1>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </BackgroundImage>

    )
}

export default Hero