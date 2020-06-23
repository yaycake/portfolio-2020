import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from './SocialMenu.module.scss'

const SocialMenu = () => {
    return (
        <ul className={styles.socialMenu}>
            <li className={styles.socialMenu__item}></li>
            <li className={styles.socialMenu__item}></li>
            <li className={styles.socialMenu__item}></li>
        </ul>
    )
}

export default SocialMenu;