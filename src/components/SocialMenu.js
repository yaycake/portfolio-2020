import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from './SocialMenu.module.scss'

const SocialMenu = () => {
    return (
        <ul className={styles.socialMenu}>
            <li className={styles.socialMenu__item}>Github</li>
            <li className={styles.socialMenu__item}>LinkedIn</li>
            <li className={styles.socialMenu__item}>Resume</li>
            <li className={styles.socialMenu__item}>Email</li>
        </ul>
    )
}

export default SocialMenu;