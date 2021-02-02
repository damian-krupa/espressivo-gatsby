module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
    "gatsby-plugin-optimize-svgs",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
