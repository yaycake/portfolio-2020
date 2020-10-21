import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from './SocialMenu.module.scss'
import CuteNavLink from "./cuteNavLink"

import Github from '../github-48.png'
import Resume from '../resume-48.png'
import Linkedin from '../linkedin-48.png'
import Dev from '../dev.svg'

const SocialMenu = () => {
    return (
        <ul className={styles.socialMenu}>
            <li className={styles.socialMenu__item}>
                <a aria-label="Grace's Github" href="https://github.com/yaycake" title="Grace's Github"><img className={styles.social_icons} src={Github}></img></a>
            </li>
            <li className={styles.socialMenu__item}>
                <a aria-label="Grace's LinkedIn Profile" href="https://www.linkedin.com/in/ygrace/" title="Grace's LinkedIn"><img className={styles.social_icons} src={Linkedin}></img></a>
            </li>
            <li className={styles.socialMenu__item}> 
                <a aria-label="Grace'sDev.to Blog" href="https://dev.to/yaycake">
                    <img className={styles.social_icons} src={Dev}/>
                </a>
            </li>
            <li className={styles.socialMenu__item}><Link aria-label="Grace's Resume" to="/resume"><img className={styles.social_icons} src={Resume}></img></Link></li>
        </ul>
    )
}

export default SocialMenu;