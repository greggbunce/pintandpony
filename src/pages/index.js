import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import CardClickable from "../components/card-clickable/card-clickable"
import CardButton from "../components/card-button/card-button"
import homeStyles from "../scss/pages/home.module.scss"

// icons
import pintIcon from "../images/icons/pint-icon.svg"
import wineIcon from "../images/icons/wine-icon.svg"
import champagneIcon from "../images/icons/champagne-icon.svg"
import horseShoeIcon from "../images/icons/horse-shoe-icon.svg"

const IndexPage = () => {
  // get blog feed
  const data = useStaticQuery(graphql`
      query {
          allMarkdownRemark {
              edges {
                  node {
                      frontmatter {
                          title
                          date
                          featuredImage {
                            publicURL
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
    <Layout class="withBackground">

      <Hero title={["The Pint & Pony ", <span>mobile micro-pub</span>]} iconBeforeTitle={<img className="icon" src={horseShoeIcon} alt="The Pint &amp; Pony" />} class="home">
        <img className={`icon ${homeStyles.bottomIcon}`} src={horseShoeIcon} alt="The Pint &amp; Pony" />
        <p>A Sussex based horsebox bar available for weddings, birthdays, private parties, corporate events and everything in-between.</p>
      </Hero>
      
      <main className={`container ${homeStyles.homeMain}`}>

        <div className="row">
            <div className="col-md-6">

              <CardClickable colour="teal" title="About Us" link="/about" icon={pintIcon}>
                <p>Little intro about us that makes the user want to click through and find out more</p>
                <hr />
              </CardClickable>
            
            </div>
            <div className="col-md-6">
            
              <CardClickable colour="green" title="Packages" link="/packages" icon={wineIcon}>
                <p>Short intro about the packages we offer, and that our prices are upfront</p>
                <hr />
              </CardClickable>

            </div>
        </div>


        <div className={`row ${homeStyles.blogFeed}`}>
            <div className="col-12">
              <h2>Blog</h2>            
            </div>
        </div>
        <div className={`row ${homeStyles.blogFeed}`}>
            {data.allMarkdownRemark.edges.reverse().slice(0,3).map((edge) => {
              return (
                <div className="col-lg-4">
                  <div className={homeStyles.blogFeedItem}>
                    <AniLink paintDrip hex="#DEE2E6" duration={0.8} to={`/blog/${edge.node.fields.slug}`}>
                      <div className={homeStyles.blogFeedContent}>
                        <p>{edge.node.frontmatter.date}</p>
                        <h3>{edge.node.frontmatter.title}</h3>
                      </div>
                      <img src={edge.node.frontmatter.featuredImage.publicURL} alt={edge.node.frontmatter.title} />
                    </AniLink>
                  </div>
                </div>
              )
            })}
        </div>
        <div className={`row ${homeStyles.blogFeed}`}>
            <div className="col-12">
              <div className={homeStyles.button}><AniLink paintDrip hex="#DEE2E6" duration={0.8} to="/blog">see all posts</AniLink></div>   
            </div>
        </div>


        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">

              <CardButton colour="blue" title="Give us a shout!" buttonLink="/contact" buttonText="Get in touch" icon={champagneIcon}>
                <p>Want to find out how we can be the perfect addition to your event? We would love to chat, drop us a line or give us a call.</p>
              </CardButton>

            </div>
            <div className="col-md-2"></div>
        </div>


      </main>
    </Layout>
  )
}

export default IndexPage