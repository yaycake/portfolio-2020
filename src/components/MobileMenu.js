import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from './MobileMenu.module.scss'

const MobileMenu = ({showMenu, clicked}) => {

    return (
        <div className={styles.mobileMenu}
            style={ showMenu ? { display: `flex` } : { display: `none` }}>
            
            <div onClick={clicked}> Hello, I'm Grace</div>

            <Link to="/">
                <span className={styles.linkLabel}>Go</span> 
                Home
            </Link>
            
            <Link to="/projects">
                <span className={styles.linkLabel}>View My</span> 
               Projects
            </Link>
           
            <Link to="/projects">
                <span className={styles.linkLabel}>Read My</span> 
                Diary
            </Link>
            <Link to="/about">
                <span className={styles.linkLabel}> Learn </span>
                About Me
            </Link>
            <Link to="/contact">
                <span className={styles.linkLabel}> Questions? </span>
                Contact Me
            </Link>
        </div>
    )
};

export default MobileMenu; 