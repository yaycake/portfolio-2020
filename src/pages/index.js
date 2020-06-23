import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import styles from "./index.module.scss"; 

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
        <span className={styles.banner_landing__text}> I help people move their brand and products into the future. <br /> Got an idea?</span>
        <Link to="/projects/">
          <Button className={styles.banner_landing__button} marginTop="35px">Contact Me</Button>
        </Link>
      </div>

      <div className={[styles.index_about, styles.index_section].join(' ')}>
        <div className={styles.index_about__textwrap}>
          <h3 className={styles.index_section_title}>Making It Happen</h3>
          <p className={styles.index_about__text_block}>
            My digital design and front end development skills are at your service: from product development to innovating your brand’s user digital experience .
          </p>
        </div>
        <div className={styles.index_about__imagewrap}>
          <img className={styles.index_about_image} src="" />
        </div>
        <div className={styles.index_about__link}>
          <h4>More About Me</h4>
        </div>
      </div>

      <div className={[styles.index_projects, styles.index_section].join(' ')}>
        <h2 className={styles.index_projects__title}>Recent Projects</h2>
        <div className={styles.index_projects__grid}>
          <div className={styles.index_projects__grid__project1}>

          </div>
          <div className={styles.index_projects__grid__project2}></div>
          <div className={styles.index_projects__grid__project3}></div>
        </div>
      </div>

      <div className={[styles.index_contact, styles.index_section].join(' ')}>
        <h2 className={styles.index_section_title}>Contact Me</h2>
        <p className={styles.index_contact_text}>
          If you’ve got a great idea or would like to chat about a unique opportunity, contact me today. 
        </p>
      </div>

      <div className={[styles.index_notes, styles.index_section].join(' ')}>
        <h2 className={styles.index_section_title}>Notes</h2>
        <div className={styles.index_notes_container}>
          <div className={styles.index_notes_card}>
            <img className={styles.index_notes_card_image}/>
            <h5 className={styles.index_notes_card_text}>Notes Title</h5>
          </div>
          <div className={styles.index_notes_card}>
            <img className={styles.index_notes_card_image}/>
            <h5 className={styles.index_notes_card_text}>Notes Title</h5>
          </div>
          <div className={styles.index_notes_card}>
            <img className={styles.index_notes_card_image}/>
            <h5 className={styles.index_notes_card_text}>Notes Title</h5>
          </div>
        </div>
      </div>
  </Layout>
  )
}

export default IndexPage
