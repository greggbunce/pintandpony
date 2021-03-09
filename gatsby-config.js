/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: "/2021site",
  siteMetadata: {
    title: "The best mobile horsebox bar in Sussex",
    description: "A Sussex based mobile horsebox bar. Hire for weddings, birthdays, parties, and corporate events. Find out more about our drinks packages, contact us today.",
    titleTemplate: '%s | The Pint & Pony',
    url: 'https://thepintandpony.co.uk', // no trailing slash!
    siteUrl: 'https://thepintandpony.co.uk', // same as 'url', but used only for the xml sitemap
    image: '/ThePintAndPony.png',
    owner: 'The Pint & Pony',
    twitterUsername: '@ThePintAndPony',
    facebookAppID: '101347811673330', // not sure this is correct - i think it needs changing
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://thepintandpony.co.uk',
        sitemap: 'https://thepintandpony.co.uk/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "G-6TPL2TBP79", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // here can you change the cookie name
          anonymize: true, // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production"],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-plugin-sass-resources",
      options: {
        resources: ["./src/scss/resources.scss"]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'dym8qkl',
        }
      }
    },
    "gatsby-plugin-transition-link",
  ]
}