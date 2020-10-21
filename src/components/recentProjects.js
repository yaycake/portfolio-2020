import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import CuteNavLink from "./cuteNavLink"
import Img from "gatsby-image"
import styles from "./recentProjects.module.scss"
import Header from "./Header"

const RecentProjects = () => {
    const data = useStaticQuery(graphql`
    query { 
      allMdx(filter: {frontmatter: {featured_: {eq: true}}}) {
        edges {
          node {
              excerpt
              fields {
                  slug
              }
            frontmatter {
              path
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              category
              skills
              tools
              description
              featured_
              title
            }
          }
        }
      }
    }
  `)

  const featured = data.allMdx.edges; 

  return (
    <div className={[styles.index_projects, styles.index_section, styles.recent_projects_wrapper].join(' ')}>
        <div className={styles.index_projects_header}>
            
            <h2 className={styles.index_projects__title}>Recent Projects</h2>
            <div className={styles.index_projects_action_desktop}>
              <CuteNavLink
                path="/projects"
                altText="My Projects"
                external={false}
              > <h4> View All Projects &#8594;</h4>
              </CuteNavLink>
            </div>
        </div>
        
        <div className={styles.index_projects__grid}>

            <div className={styles.index_projects__grid__project1}>
                <Link className={styles.imageLink} to={`project/${featured[0].node.frontmatter.path}`}>
                    <Img className={styles.projects__grid__image} fluid={featured[0].node.frontmatter.featuredImage.childImageSharp.fluid}/>
                    <div className={styles.projects__grid__content}>
                        <span className={styles.projects__grid__title}>{featured[0].node.frontmatter.title} </span>
                        <span>{featured[0].node.frontmatter.category}</span>
                        <span> &#8594;</span>
                    </div>
                </Link> 
            </div>
        
            
            <div className={styles.index_projects__grid__project2}>
                <Link to={`project/${featured[1].node.frontmatter.path}`}>
                    <Img className={styles.projects__grid__image} fluid={featured[1].node.frontmatter.featuredImage.childImageSharp.fluid}/>
                    <div className={styles.projects__grid__content}>
                    
                    <span className={styles.projects__grid__title}>{featured[1].node.frontmatter.title} </span>
                    <span>{featured[1].node.frontmatter.category}</span>
                    <span> &#8594;</span>
                    </div>
                </Link>
            </div>
        
            <div className={styles.index_projects__grid__project3}>
                <Link to={`project/${featured[2].node.frontmatter.path}`}>
                <Img className={styles.projects__grid__image} fluid={featured[2].node.frontmatter.featuredImage.childImageSharp.fluid}/>
                <div className={styles.projects__grid__content}>
                    
                    <span className={styles.projects__grid__title}>{featured[2].node.frontmatter.title} </span>
                    <span>{featured[2].node.frontmatter.category}</span>
                    <span> &#8594;</span>
                </div>
                </Link>

            </div>
        </div>

        <h4 className={styles.index_projects_action_mobile}> <Link to="/projects">View All Projects &#8594;</Link></h4>
    </div>
  )
}

export default RecentProjects;