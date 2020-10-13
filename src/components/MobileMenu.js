import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from './MobileMenu.module.scss'

const MobileMenu = ({showMenu, clicked}) => {

    return (
        <div className={styles.mobileMenu}
            style={ showMenu ? { display: `flex` } : { display: `none` }}>
            
            {/* <div onClick={clicked}> CLOSE MENU</div> */}
            
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/diary">Diary</Link>
            <Link to="/about">About</Link>
        </div>
    )
};

export default MobileMenu; 