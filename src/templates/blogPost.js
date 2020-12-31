import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }     
    }    
`

const BlogPost = (props) => {
    return (
        <Layout>

            <Hero title={props.data.markdownRemark.frontmatter.title}>
                <span>{props.data.markdownRemark.frontmatter.date}</span>
            </Hero>

            <main className="container blog-main">

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                    </div>
                    <div className="col-md-2"></div>
                </div>

            </main>
        </Layout>
    )
}

export default BlogPost