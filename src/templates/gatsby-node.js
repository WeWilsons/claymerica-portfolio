exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const portfolioTemplate = path.resolve(`./src/templates/portfolio.js`)
  
    const result = await graphql(`
      query {
        allWpPost {
          nodes {
            id
            slug
          }
        }
      }
    `)
  
    if (result.errors) {
      throw result.errors
    }
  
    result.data.allWpPost.nodes.forEach(node => {
      createPage({
        path: `/portfolio/${node.slug}/`,
        component: portfolioTemplate,
        context: {
          id: node.id,
        },
      })
    })
  }
  