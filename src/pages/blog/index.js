import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../../components/layout/layout"
import Hero from "../../components/hero/hero"
import blogStyles from "./blog.module.scss"
import SEO from "../../components/seo/seo"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                sort: {
                    fields: [frontmatter___date]
                    order: DESC
                }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            date(formatString:"Do MMMM YYYY")
                            author
                            description
                            featuredImage {
                                id
                                childImageSharp {
									fluid(maxHeight: 300, maxWidth: 400) {
                                        ...GatsbyImageSharpFluid_withWebp
                                        originalName
									}
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <Layout>

            <SEO title="Blog" description="The Pint & Pony Blog | Latest news and updates" />

            <Hero title="Our blog" />

            <main className="container blog-main">

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <ol className={blogStyles.posts}>
                            {data.allMarkdownRemark.edges.map((edge) => {
                                return (
                                    <li className={blogStyles.post}>
                                        <AniLink paintDrip hex="#DEE2E6" duration={0.8} to={`/blog/${edge.node.fields.slug}`}>
                                            <div className="row">
                                                <div className={`col-lg-4 ${[blogStyles.left]}`}>
                                                    <Img className={blogStyles.thumbnail} key={edge.node.frontmatter.featuredImage.id} fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} alt={edge.node.frontmatter.title} />
                                                </div>
                                                <div className={`col-lg-8 ${[blogStyles.right]}`}>
                                                    <small className="date"><em>{edge.node.frontmatter.author} - {edge.node.frontmatter.date}</em></small>
                                                    <h2>{edge.node.frontmatter.title}</h2>
                                                    <Img className={blogStyles.thumbnail} key={edge.node.frontmatter.featuredImage.id} fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} alt={edge.node.frontmatter.title} />
                                                    <p>{edge.node.frontmatter.description}</p>
                                                </div>
                                            </div>                                            
                                        </AniLink>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                    <div className="col-md-2"></div>
                </div>

            </main>
        </Layout>
    )
}

export default BlogPage