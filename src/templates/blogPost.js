import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import SEO from "../components/seo/seo"
import "./blogPost.scss"

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                description
                date(formatString:"Do MMMM YYYY")
                author
                featuredImage {
                    childImageSharp {
                        fixed(height: 450, width: 600) {
                            ...GatsbyImageSharpFixed_withWebp
                            src
                        }
                    }
                }
            }
            html
        }
        site {
            siteMetadata {
                image
                url
            }
        }
    }
`

const BlogPost = (props) => {

    // get url for schema ID
    const url = typeof window !== 'undefined' ? window.location.href : '';
    // blog post schema
    const schemaBlogPost = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
        },
        "headline": props.data.markdownRemark.frontmatter.title,
        "description": props.data.markdownRemark.frontmatter.description,
        "image": props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fixed.src,  
        "author": {
            "@type": "Organization",
            "name": "The Pint & Pony"
        },  
        "publisher": {
        "@type": "Organization",
        "name": "The Pint & Pony",
        "logo": {
            "@type": "ImageObject",
            "url": `${props.data.site.siteMetadata.url}${props.data.site.siteMetadata.image}`
        }        
        },
        "datePublished": props.data.markdownRemark.frontmatter.date
    }

    return (
        <Layout>

            <SEO title={props.data.markdownRemark.frontmatter.title} description={props.data.markdownRemark.frontmatter.description} image={props.data.markdownRemark.frontmatter.featuredImage.childImageSharp.fixed.src} />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(schemaBlogPost)}</script>
            </Helmet>
            
            <Hero title={props.data.markdownRemark.frontmatter.title} />

            <main className="container blog-main">

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                    <small className="date"><em>{props.data.markdownRemark.frontmatter.author} - {props.data.markdownRemark.frontmatter.date}</em></small>
                        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                    </div>
                    <div className="col-md-2"></div>
                </div>

            </main>
        </Layout>
    )
}

export default BlogPost