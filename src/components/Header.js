import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MenuToggle from "./MenuToggle"
import styles from './Header.module.scss'

const Header = () => (
    <div className={styles.header}>
        <h3>Grace Yang</h3>
        <ul className={styles.header__navlinks}>
            <li> <Link to="/projects/"><h4>Projects </h4></Link></li>
            <li> <Link to="/diary"><h4>Diary</h4></Link> </li>
            <li> <Link to=""><h4>Contact</h4></Link> </li>
        </ul>
        <MenuToggle></MenuToggle>
    </div>
)

export default Header; 