import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
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


            <Hero title="Blog" />

            <main className="container blog-main">

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <ol className={blogStyles.posts}>
                            {data.allMarkdownRemark.edges.reverse().map((edge) => {
                                return (
                                    <li className={blogStyles.post}>
                                        <AniLink paintDrip hex="#DEE2E6" duration={0.8} to={`/blog/${edge.node.fields.slug}`}>
                                            <h2>{edge.node.frontmatter.title}</h2>
                                            <p>{edge.node.frontmatter.date}</p>
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