import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import galleryStyles from "./gallery.module.scss"

import Carousel from 'react-bootstrap/Carousel'

const Gallery = (props) => {

    const data = useStaticQuery(graphql`
        query Images {
            images: allFile(filter: { relativeDirectory: { eq: "images/gallery" } }) {
                nodes {
                    id
                    childImageSharp {
                        fluid (
                            maxWidth: 800
                            maxHeight: 450
                        )
                        {
                            originalName
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            },

            build: allFile(filter: { relativeDirectory: { eq: "images/build" } }) {
                nodes {
                    id
                    childImageSharp {
                        fluid (
                            maxWidth: 800
                            maxHeight: 450
                            cropFocus: ENTROPY
                        )
                        {
                            originalName
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    `)

    const gallery = data[props.galleryType].nodes
    
    return (
        <div className={galleryStyles.gallery}>
            <Carousel fade={props.fade} controls={props.controls} indicators={props.indicators} nextLabel={""} prevLabel={""}>
                {gallery.map(image => (
                <Carousel.Item interval={props.interval}>
                    <Img key={image.id} fluid={image.childImageSharp.fluid} alt={image.childImageSharp.fluid.originalName} />
                </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Gallery