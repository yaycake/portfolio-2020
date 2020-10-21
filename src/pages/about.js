import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import styles from "./about.module.scss"; 

const AboutPage = (props) => {
  
  const siteTitle = "Grace | Design & Code"

  return (
      <Layout  location={props.location} title={siteTitle}>
        <SEO 
          title="About Grace"
          keywords = { ['design', 'product development', 'ux', 'ui', 'front end development', 'design', 'react']}
        />
        <h1 className={styles.page_title}>Meet Me</h1>

        <div className={styles.about_banner_wrapper}>

          <div 
            className={styles.about_banner_image}
            style={ {background: `url(../me.png)` } }
            >
          </div>

          <div className={styles.about_banner_text}>
            <div>
              <h3>Loves</h3>
              <p> Healthy ankles, healthy ankles, healthy ankles</p>
            </div>
            <div>
              <h3>Currently</h3>
              <p>Looking for new projects, teams, and opportunities</p>
            </div>
          </div>
        </div>

        <section>
          <h3>
            My digital design and front end development skills are at your service: from product development to innovating your brand’s user digital experience .
          </h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </section>

        <Section 
          title="Contact Me" 
          action="Let's Chat" 
          link="/contact" 
          text="If you’ve got a great idea or would like to chat about a unique opportunity, contact me.">
        </Section> 
        
      </Layout>
  )
}

export default AboutPage; 