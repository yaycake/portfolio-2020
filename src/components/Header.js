import React from "react"
import CuteNavLink from "./cuteNavLink"
import { Link } from "gatsby"
import styles from './Header.module.scss'


const Header = ({showMenu, children}) => (
    <header className={styles.header}
        style={ showMenu ? {position: "absolute"} : {position: "relative"}}
    >
        <div className={styles.header__logo} 
            style = { showMenu ? { position: "fixed"} : {position: "absolute"}}>
           
            <Link aria-label="Grace's Home Page" className={styles.logo__link} to="/">
                <span></span>
                Grace Yang
            </Link>
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