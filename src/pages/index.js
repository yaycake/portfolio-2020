import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import styles from "./index.module.scss"; 

import Corgis from "../images/corgis.png"

import Section from "../components/Section"

const IndexPage = (props) => {
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
          <div className={styles.index_projects__grid__project1}></div>
          <div className={styles.index_projects__grid__project2}></div>
          <div className={styles.index_projects__grid__project3}></div>
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
