import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"

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
            <main className="container blog-main">

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                        <p>{props.data.markdownRemark.frontmatter.date}</p>
                        <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
                    </div>
                    <div className="col-md-2"></div>
                </div>

            </main>
        </Layout>
    )
}

export default BlogPost