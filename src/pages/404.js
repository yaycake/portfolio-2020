import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CuteNavLink from "../components/cuteNavLink"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>If you're lost... why don't you go 
          <CuteNavLink
            path = "/"
            altText = "go home"
            external = {false}
            >
            home?
            </CuteNavLink></p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
