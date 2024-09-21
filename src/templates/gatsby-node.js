// gatsby-node.js
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const portfolioTemplate = path.resolve(`src/templates/portfolio.js`)

  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.slug}/`,
      component: portfolioTemplate,
      context: {
        id: edge.node.id,
      },
    })
  })
}
