const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)

const { fnImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const projectPost = path.resolve(`./src/templates/project.js`)
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create project pages.
    const projects = result.data.allMdx.edges

    projects.forEach((project, index) => {
      const previous = index === projects.length - 1 ? null : projects[index + 1].node
      const next = index === 0 ? null : projects[index - 1].node

      createPage({
        path: `projects${project.node.fields.slug}`,
        component: projectPost,
        context: {
          slug: project.node.fields.slug,
          previous,
          next
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  // fnImagesToRelative(node)
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value,
    })
  }
}


