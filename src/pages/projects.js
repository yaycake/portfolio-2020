import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import SmallProjectTile from '../components/SmallProjectTile'

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "../components/button"

import styles from "./projects.module.scss"

class Project extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.allMdx.edges

    const projectTiles = projects.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug

      

      return (
        <SmallProjectTile 
          title = {title}
          path = {node.frontmatter.path}
          featuredImage = { node.frontmatter.featuredImage.childImageSharp.fluid }
          slug = { `project${node.fields.slug}`}
          category = "category"
      
        ></SmallProjectTile>
        // <div key={node.frontmatter.path}>
        //   <Image fluid ={node.frontmatter.featuredImage.childImageSharp.fluid}></Image>

        //   <h3>
        //     <Link
        //       style={{ boxShadow: `none` }}
        //       to={`project${node.fields.slug}`}
        //      >
        //       {title}
        //     </Link>
            
        //   </h3>
        //   <small>{node.frontmatter.date}</small>
        //   <p
        //     dangerouslySetInnerHTML={{
        //       __html: node.frontmatter.description || node.excerpt,
        //     }}
        //   />
        // </div>
      )

    })

    return (
      <Layout location={this.props.location} title={siteTitle} subMenu = { {title: "Projects"}}>
        
        <SEO title="All posts" />
       
        <div className={styles.project_tiles_wrapper}>
          { projectTiles }
            
        </div>

      </Layout>
    )
  }
}

export default Project

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx (sort: { fields: [frontmatter___date], order: DESC }){
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
`


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
