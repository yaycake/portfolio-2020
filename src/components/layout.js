import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Header from "./Header"
import SocialMenu from "./SocialMenu"
import SubMenu from "./SubMenu.js"
import { rhythm, scale } from "../utils/typography"

import styles from "./layout.module.scss"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const projectPath = `${__PATH_PREFIX__}/projects/`
    let header

    if (location.pathname === rootPath || location.pathname === projectPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === projectPath ? `/projects/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            // fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/projects/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <div
          className= {styles.layout_wrapper}
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            // maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {/* <header>{header}</header> */}
          <Header></Header>
          <SocialMenu></SocialMenu>
          <SubMenu title={this.props.subMenu.title} linkArray={this.props.subMenu.links}></SubMenu>
          <main>{children}</main>
        </div>
        <Footer>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
