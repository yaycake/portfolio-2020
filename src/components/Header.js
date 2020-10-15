import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MenuToggle from "./MenuToggle"
import CuteNavLink from "./cuteNavLink"
import MobileMenu from "./MobileMenu"
import styles from './Header.module.scss'
import emailIcon from "../../content/assets/icon_email.svg"

const Header = ({showMenu, children}) => (
    <header className={styles.header}
        style={ showMenu ? {position: "absolute"} : {position: "relative"}}
    >
        {/* <Link className={styles.header__logo} to="/"
            style = {
                showMenu ? { position: "fixed"} : {position: "absolute"}
            }
        >Grace Yang</Link> */}

        <div className={styles.header__logo} 
            style = { showMenu ? { position: "fixed"} : {position: "absolute"}}>
            <CuteNavLink
                path="/"
                altText="Go Home"
                external={false}
            ><span>Grace Yang</span></CuteNavLink>
        </div>
        <ul className={styles.header__navlinks}>
            <li> 
                <CuteNavLink
                    path="/projects"
                    altText="View My Projects"
                    external={false}
                    >
                        <h4>Projects </h4> 
                </CuteNavLink>
            </li>
            <li> 
                <CuteNavLink
                    path="https://dev.to/yaycake"
                    altText="Read My Blog"
                    external={true}
                    >
                        <h4>Blog</h4> 
                </CuteNavLink>
            </li>
            <li> 
                <CuteNavLink
                    path="/contact"
                    altText="Contact Me"
                    external={false}
                    >
                        <h4>Contact</h4> 
                </CuteNavLink>
            </li>
            <li> 
                <CuteNavLink
                    path="/about"
                    altText="About Me"
                    external={false}
                    >
                        <h4>About</h4> 
                </CuteNavLink>
            </li>
        </ul>
        {children}
        
    </header>
)

export default Header; 