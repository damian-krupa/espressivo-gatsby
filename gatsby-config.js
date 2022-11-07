module.exports = {
  siteMetadata: {
    title: `Espressivo`,
    author: `Damian Krupa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-json`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Quicksand",
              variants: ["300", "400", "500", "600", "700"],
              subsets: ["latin-ext"],
            },
            // {
            //   family: "Rubik",
            //   variants: ["400"],
            // },
          ],
        },
      },
    },
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        // Configure color of the scroll indicator
        color:
          "linear-gradient(90deg, #EBCC70 1.88%, #EEE9D8 27.42%, #EBCD73 52.97%, #EEE9D8 76.95%, #EBCD73 100.03%)",
        // Height of the scroll indicator
        height: "2px",
        // Configure paths where the scroll indicator will appear
        // paths: ["/", "/blog/**"],
        // Configure the z-index of the indicator element
        zIndex: `9999`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Espressivo`,
        short_name: `Espressivo`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/favicon/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ["G-VVJ4QN0PR6"],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    "gatsby-plugin-optimize-svgs",
    "gatsby-plugin-scroll-reveal",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
