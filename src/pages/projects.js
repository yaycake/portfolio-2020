import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import SmallProjectTile from '../components/SmallProjectTile'

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./projects.module.scss"



const Projects = (props) => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")

            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            description
          }
        }
      }
    }
  }
`)
  // const { data } = props
  const projectsData = data.allMdx.edges
  const siteTitle = data.site.siteMetadata.title


  
   

    

    const projectTiles = projectsData.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug

      return (
        <SmallProjectTile 
          title = {title}
          path = {node.frontmatter.path}
          featuredImage = { node.frontmatter.featuredImage.childImageSharp.fluid }
          slug = { `project${node.fields.slug}`}
          category = "category"
      
        ></SmallProjectTile>
      )

    })

    return (
      <Layout location={props.location} title={siteTitle} subMenu = { {title: "Projects"}}>
        
        <SEO title="All posts" />
        <h1 className={styles.page_title}>Projects</h1>
        <div className={styles.project_tiles_wrapper}>
          { projectTiles && projectTiles }
            
        </div>

      </Layout>
    )
  }


export default Projects

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMdx (sort: { fields: [frontmatter___date], order: DESC }){
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")

//             featuredImage {
//               childImageSharp {
//                 fluid(maxWidth: 800) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `


// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             featuredImage
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `
