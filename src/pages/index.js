import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Grace | Design & Code"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <SEO
          title="Home"
          keywords={[`projects`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <Link to="/projects/">
          <Button marginTop="35px">Go to Projects</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
