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
            style={ {
              background: `url(../grace_bike.png)`, 
              backgroundPosition: 'right center', 
              backgroundSize: 'cover'
            
              } }
            >
          </div>

          <div className={styles.about_banner_text}>
            <div>
              <h3>Loves</h3>
              <p> to learn, bike, art, cook, camp, and watch Top Chef.</p>
            </div>
            <div>
              <h3>Currently</h3>
              <p>Based in Taipei, learning Three.JS, and looking for new projects, teams, and opportunities.</p>
            </div>
          </div>
        </div>

        <section>
          <h3>
            My digital design and front end development skills are at your service: from product development to innovating your brand’s user digital experience .
          </h3>

          <p>My career began in marketing, event production, and brand strategy. In Chengdu, I was freelancing in graphics, user experience, and user interaction design; after going through a coding bootcamp, I added front-end development to the arsenal, coding in Javascript, Ruby on Rails, HTML/CSS, and developing websites &amp; WeChat Mini Programs. 
         </p>


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