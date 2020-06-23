import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from './MobileMenu.module.scss'

const MobileMenu = ({showMenu, clicked}) => {

    return (
        <div className={styles.mobileMenu}
            style={ showMenu ? {display: `block`} : {display: `none`}}>
            <div onClick={clicked}> CLOSE MENU</div>
            <Link>Home</Link>
            <Link>Projects</Link>
            <Link>Diary</Link>
        </div>
    )
};

export default MobileMenu; 