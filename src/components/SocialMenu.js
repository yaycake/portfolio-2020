import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from './SocialMenu.module.scss'

import Github from '../images/icons/github-48.png'
import Resume from '../images/icons/resume-48.png'
import Linkedin from '../images/icons/linkedin-48.png'

const SocialMenu = () => {
    return (
        <ul className={styles.socialMenu}>
            <li className={styles.socialMenu__item}><a href="https://github.com/yaycake"><img className={styles.social_icons} src={Github}></img></a></li>
            <li className={styles.socialMenu__item}><a href="https://www.linkedin.com/in/ygrace/"><img className={styles.social_icons} src={Linkedin}></img></a></li>
            <li className={styles.socialMenu__item}><Link to="/resume"><img className={styles.social_icons} src={Resume}></img></Link></li>
        </ul>
    )
}

export default SocialMenu;