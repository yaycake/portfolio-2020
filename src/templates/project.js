import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./project.module.scss"

import CuteNavLink from "../components/cuteNavLink"

class ProjectTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    const keywordsArray = [ post.frontmatter.category];

    const skillsArray = post.frontmatter.skills.split(', ')
   
    skillsArray.map((skill) => {
        keywordsArray.push(skill);
    })
    
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
          keywords = { keywordsArray }
        />
        <div className={styles.project_wrapper}>
       
          <h1 className={styles.page_title}>{post.frontmatter.title}</h1>

          <div className={styles.project_banner_wrapper}>
            <Image alt={post.frontmatter.title} className={styles.project_featured_image} fluid ={post.frontmatter.featuredImage.childImageSharp.fluid }></Image>
            <div className={styles.project_banner_text}>
              <h3> { post.frontmatter.category }</h3>
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

        <MDXRenderer>
          {post.body}
        </MDXRenderer>

        <hr className={styles.divider}/>
        </div>
        <ul className={styles.previous_next_links}>
          <li>
            {previous && (
              <CuteNavLink
                path = { previous.fields.slug}
                altText = { previous.frontmatter.title }
                external = { false }>
                <h3>← {previous.frontmatter.title}</h3>
              </CuteNavLink>
            )}
          </li>
          <li>
            {next && (
              <CuteNavLink
                path = { next.fields.slug }
                altText = {next.frontmatter.title}
                external = { false } >
                 <h3> {next.frontmatter.title} → </h3>
              </CuteNavLink>
            )}
          </li>

        </ul>
        
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