import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from './MobileMenu.module.scss'

const MobileMenu = ({showMenu, clicked, keyed}) => {

    return (
        <div className={styles.mobileMenu}
            style={ showMenu ? { display: `flex` } : { display: `none` }}>

            <Link onClick={clicked} onKeyUp={keyed} to="/">
                <span className={styles.linkLabel}>Go</span> 
                Home
            </Link>
            
            <Link onClick={clicked} onKeyUp={keyed} to="/projects">
                <span className={styles.linkLabel}>View My</span> 
               Projects
            </Link>
           
            <Link onClick={clicked} onKeyUp={keyed} to="/projects">
                <span className={styles.linkLabel}>Read My</span> 
                Blog
            </Link>
            <Link onClick={clicked} onKeyUp={keyed} to="/about">
                <span className={styles.linkLabel}> Learn </span>
                About Me
            </Link>
            <Link onClick={clicked} onKeyUp={keyed} to="/contact">
                <span className={styles.linkLabel}> Questions? </span>
                Contact Me
            </Link>
        </div>
    )
};

export default MobileMenu; 