module.exports = {
  siteMetadata: {
    title: `Claymerica Industries Portfolio`,
    description: `A stunning portfolio powered by Gatsby and WordPress.`,
    author: `WeWilsons`,
    siteUrl: `https://claymericaindustries.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // Your WordPress source
        url: `https://mudwomb.com/graphql`,
        
        // Additional options
        schema: {
          timeout: 30000,
        },
        // Specify the types you want to fetch, or leave default to fetch all
        // type: {
        //   MediaItem: {
        //     localFile: {
        //       requestConcurrency: 5, // Adjust as needed
        //     },
        //   },
        // },
      },
    },
    // Add other plugins as needed
  ],
}
