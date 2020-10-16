import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./project.module.scss"

class ProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout 
        location={this.props.location} 
        title={siteTitle} 
        subMenu={ {
        title: post.frontmatter.title
      }}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <div className={styles.project_wrapper}>


       
        <h1 className={styles.page_title}>{post.frontmatter.title}</h1>

        <div className={styles.project_banner_wrapper}>

          <Image className={styles.project_featured_image} fluid ={post.frontmatter.featuredImage.childImageSharp.fluid }></Image>

          <div className={styles.project_banner_text}>
              <h3> { post.frontmatter.category } Category </h3>
              <p>{ post.frontmatter.engagement_period }</p>
              <div>
                <h3>Skills</h3>
                <p> { post.frontmatter.skills }</p>
              </div>
              <div>
                <h3>Tools</h3>
                <p>{ post.frontmatter.tools }</p>
              </div>
            </div>
        </div>

        
       
      
        {/* <p> {post.frontmatter.date} </p> */}
        <MDXRenderer>
          {post.body}
          </MDXRenderer>

        <hr className={styles.divider}/>
        

        <ul className={styles.previous_next_links}
          style={{
         
          }}
        >
          <li>
            {previous && (
              <Link to={`project${previous.fields.slug}`} rel="prev">
                <h3>
                ← {previous.frontmatter.title}
                </h3>
              </Link>
            )}
          </li>
          
          <li>
            {next && (
              <Link to={`project${next.frontmatter.path}`} rel="next">
                <h3>
                {next.frontmatter.title} →
                </h3>
              </Link>
            )}
          </li>
        </ul>
        </div>
      </Layout>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx( fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        skills
        engagement_period
        tools
        category
        date(formatString: "MMMM DD, YYYY")
        description
        
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }



      }
    }
  }
`

// export const pageQuery = graphql`
//   query ProjectBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//         author
//       }
//     }
//     mdx(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       body
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//   }
// `
