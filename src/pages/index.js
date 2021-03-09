import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

// components
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import CardClickable from "../components/card-clickable/card-clickable"
import CardComponent from "../components/card/card"
import Button from "../components/button/button"

// styles
import homeStyles from "../scss/pages/home.module.scss"

// icons
import pintIcon from "../images/icons/pint-icon.svg"
import wineIcon from "../images/icons/wine-icon.svg"
import champagneIcon from "../images/icons/champagne-icon.svg"
import horseShoeIcon from "../images/icons/horse-shoe-icon.svg"

const IndexPage = (props) => {

  // get blog feed
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
							featuredImage {
								publicURL
								childImageSharp {
									fluid(maxHeight: 375, maxWidth: 500) {
										...GatsbyImageSharpFluid_withWebp
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
			site {
				siteMetadata {
					image
					url
					owner
				}
			}
		}
	`)

	// structured data 
	const schemaDefaultData = {
		"@context": "https://schema.org",
		"@type": "Corporation",
		"name": data.site.siteMetadata.owner,
		"alternateName": "@thepintandpony",
		"url": data.site.siteMetadata.url,
		"logo": `${data.site.siteMetadata.url}${data.site.siteMetadata.image}`,
		"contactPoint": {
			"@type": "ContactPoint",
			"address": "Worthing United Kingdom",
			"email": "info@thepintandpony.co.uk",
			"contactType": "reservations",
			"areaServed": "GB",
			"availableLanguage": "en"
		},
		"sameAs": [
			"https://www.facebook.com/ThePintAndPony",
			"https://twitter.com/ThePintAndPony",
			"https://www.instagram.com/thepintandpony"
		]
	}
  
	return (
		<Layout class="withBackground">

			<Helmet>
				<script type="application/ld+json">{JSON.stringify(schemaDefaultData)}</script>
				<meta name="google-site-verification" content="1KtoeAkwcouRv-QGEOhs2hFLeUilGk3f8RKk3PSk7_A" />
			</Helmet>

			<Hero title={["The Pint & Pony ", <span>mobile micro-pub</span>]} iconBeforeTitle={<img className="icon" src={horseShoeIcon} alt="The Pint &amp; Pony" />} class="home">
				<img className={`icon ${homeStyles.bottomIcon}`} src={horseShoeIcon} alt="The Pint &amp; Pony" />
				<p>A Sussex based horsebox bar available for weddings, birthdays, private parties, corporate events and everything in-between.</p>
			</Hero>
      
      		<main className={`container ${homeStyles.homeMain}`}>

				<div className="row equalized-components">
					<div className="col-md-6">

					<CardClickable colour="teal" title="About Us" link="/about" icon={pintIcon}>
						<p>Find out who we are, and how we converted a horsebox into a mobile bar that’s perfect for weddings & events</p>
						<hr />
					</CardClickable>
					
					</div>
					<div className="col-md-6">
					
					<CardClickable colour="green" title="Packages" link="/packages" icon={wineIcon}>
						<p>With several options available, we have the right package for any kind of event.</p>
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
					{data.allMarkdownRemark.edges.slice(0,3).map((edge) => {
						return (
							<div className="col-lg-4">
								<div className={homeStyles.blogFeedItem}>
									<AniLink paintDrip hex="#DEE2E6" duration={0.8} to={`/blog/${edge.node.fields.slug}`}>
									<div className={homeStyles.blogFeedContent}>
										<p>{edge.node.frontmatter.date}</p>
										<h3>{edge.node.frontmatter.title}</h3>
									</div>
									<Img fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} alt={edge.node.frontmatter.title} />
									</AniLink>
								</div>
							</div>
						)
					})}
				</div>
				<div className={`row ${homeStyles.blogFeed}`}>
					<div className="col-12">

						<div className={homeStyles.button}>
							<Button link="/blog" type="button">see all posts</Button>
						</div>

					</div>
				</div>

				<div className="row">
					<div className="col-md-2"></div>
					<div className="col-md-8">

						<CardComponent colour="blue" title="Give us a shout!" icon={champagneIcon}>
							<p>Want to find out how we can be the perfect addition to your event? We would love to chat.</p>
							<Button type="cta" link="/contact" embedded="true">Get in touch</Button>
						</CardComponent>

					</div>
					<div className="col-md-2"></div>
				</div>

      		</main>
   		</Layout>
  	)
}

export default IndexPage