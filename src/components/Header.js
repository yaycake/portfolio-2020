import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MenuToggle from "./MenuToggle"
import MobileMenu from "./MobileMenu"
import styles from './Header.module.scss'
import emailIcon from "../../content/assets/icon_email.svg"

const Header = ({showMenu, children}) => (
    <header className={styles.header}
        style={ showMenu ? {position: "absolute"} : {position: "relative"}}
    >
        <Link className={styles.header__logo} to="/"
            style = {
                showMenu ? { position: "fixed"} : {position: "absolute"}
            }
        >Grace Yang</Link>
        <ul className={styles.header__navlinks}>
            <li> <Link to="/projects/"><h4>Projects </h4></Link></li>
            <li> <a href="https://dev.to/yaycake"><h4>Blog</h4></a> </li>
            <li> <Link to=""><h4>Contact</h4></Link> </li>
            <li> <Link to="/about"><h4>About</h4></Link> </li>
        </ul>
        {children}
        {/* <div className={styles.header__email}></div> */}
        {/* <a href="mailto:im@thegraceyang.com"><img className={styles.header__email} src={emailIcon}></img></a>
         */}
        
    </header>
)

export default Header; 