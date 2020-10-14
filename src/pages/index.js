import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"; 
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import styles from "./index.module.scss"; 

import Corgis from "../images/corgis.png"

import Section from "../components/Section"



const IndexPage = (props) => {

  const data = useStaticQuery(graphql`
    query { 
      allMdx(filter: {frontmatter: {featured_: {eq: true}}}) {
        edges {
          node {
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

  console.log(featured)

  const siteTitle = "Grace | Design & Code"

  return (
    <Layout 
      location={props.location} 
      title={siteTitle} 
      >
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <SEO
      title="Home"
      keywords={[`projects`, `gatsby`, `javascript`, `react`]}
    />

      <div className={[styles.banner, styles.index_section].join(' ')}>
        <h1 className={styles.banner_landing__greeting}>
          I design &amp; code.
        </h1>
        <h3 className={styles.banner_landing__text}> I help people move their brand and products into the future. <br /> Got an idea?</h3>
        <Link to="/contact">
          <Button className={styles.banner_landing__button} marginTop="3rem">Contact Me</Button>
        </Link>
      </div>


      <Section 
        title="Full Frontal Design" 
        action="More About Me" 
        link="/about" 
        text="My digital design and front end development skills are at your service: from product development to innovating your brand’s user digital experience .">
          {/* <img className={styles.index_about_image} src={Corgis} /> */}
      </Section> 

      <div className={[styles.index_projects, styles.index_section].join(' ')}>
        <div className={styles.index_projects_header}>
          <h2 className={styles.index_projects__title}>Recent Projects</h2>
          <h4 className={styles.index_projects_action_desktop}> <Link to="/projects">View All Projects &#8594;</Link></h4>
        </div>
        
        <div className={styles.index_projects__grid}>
          <div className={styles.index_projects__grid__project1}>
            <Link to={featured[0].node.frontmatter.path}>
              <Img className={styles.projects__grid__img} fluid={featured[0].node.frontmatter.featuredImage.childImageSharp.fluid}/>
              <div className={styles.projects__grid__content}>
                
                  <span className={styles.projects__grid__title}>{featured[0].node.frontmatter.title} </span>
                  <span>{featured[0].node.frontmatter.category}</span>
                  <span> &#8594;</span>
              </div>
            </Link> 
          </div>
          
              
          <div className={styles.index_projects__grid__project2}>
            <Link to={featured[1].node.frontmatter.path}>
                <Img fluid={featured[1].node.frontmatter.featuredImage.childImageSharp.fluid}/>
                <div className={styles.projects__grid__content}>
                  
                  <span className={styles.projects__grid__title}>{featured[1].node.frontmatter.title} </span>
                  <span>{featured[1].node.frontmatter.category}</span>
                  <span> &#8594;</span>
                </div>
              </Link>
          </div>
        
          <div className={styles.index_projects__grid__project3}>
            <Link to={featured[2].node.frontmatter.path}>
              <Img fluid={featured[2].node.frontmatter.featuredImage.childImageSharp.fluid}/>
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


      <Section 
        title="Contact Me" 
        action="Let's Chat" 
        link="/contact" 
        text="If you’ve got a great idea or would like to chat about a unique opportunity, contact me.">
      </Section> 
  </Layout>
  )
}

export default IndexPage
