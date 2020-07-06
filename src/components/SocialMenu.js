import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from './SocialMenu.module.scss'

import Github from '../images/icons/github-48.png'
import Resume from '../images/icons/resume-48.png'
import Linkedin from '../images/icons/linkedin-48.png'
import Dev from '../images/icons/dev.svg'

const SocialMenu = () => {
    return (
        <ul className={styles.socialMenu}>
            <li className={styles.socialMenu__item}><a href="https://github.com/yaycake" title="Grace's Github"><img className={styles.social_icons} src={Github}></img></a></li>
            <li className={styles.socialMenu__item}><a href="https://www.linkedin.com/in/ygrace/" title="Grace's LinkedIn"><img className={styles.social_icons} src={Linkedin}></img></a></li>
            <li className={styles.socialMenu__item}> 
                <a href="https://dev.to/yaycake">
                    <img className={styles.social_icons} src={Dev}/>
                </a>
            </li>
            <li className={styles.socialMenu__item}><Link to="/resume"><img className={styles.social_icons} src={Resume}></img></Link></li>
        </ul>
    )
}

export default SocialMenu;