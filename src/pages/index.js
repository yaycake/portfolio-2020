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
      subMenu={ 
        {title: "Recent Projects", 
        links: ["Ubisoft", "Horizons", "ORM Fertility"]} 
      }>
      <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      <SEO
      title="Home"
      keywords={[`projects`, `gatsby`, `javascript`, `react`]}
    />
      <h1 className={styles.landing__greeting}>
        I design &amp; code websites, mobile applications, and WeChat Mini Programs.
      </h1>
      <Link to="/projects/">
        <Button marginTop="35px">Go to Projects</Button>
      </Link>
  </Layout>
  )
}

export default IndexPage
