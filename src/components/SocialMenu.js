import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from './SocialMenu.module.scss'
import CuteNavLink from "./cuteNavLink"

// import Github from '../images/icons/github-48.png'
// import Resume from '../images/icons/resume-48.png'
// import Linkedin from '../images/icons/linkedin-48.png'
// import Dev from '../images/icons/dev.svg'

const SocialMenu = () => {
    console.log(Github)
    console.log(Resume)
    console.log(Linkedin)
    console.log(Dev)


    console.log(typeof Github)
    console.log(typeof Resume)
    console.log(typeof Linkedin)
    console.log(typeof Dev)
    return (
        <ul className={styles.socialMenu}>
            <li className={styles.socialMenu__item}>
                <a aria-label="Grace's Github" href="https://github.com/yaycake" title="Grace's Github">
                    <img 
                    className={styles.social_icons} 
                    // src={Github}
                    src = "../github-48.png"
                    ></img>
                </a>
            </li>
            <li className={styles.socialMenu__item}>
                <a aria-label="Grace's LinkedIn Profile" 
                    href="https://www.linkedin.com/in/ygrace/" 
                    title="Grace's LinkedIn">
                        <img className={styles.social_icons} 
                        // src={Linkedin}
                        src="../linkedin-48.png"
                        ></img>
                </a>
            </li>
            <li className={styles.socialMenu__item}> 
                <a aria-label="Grace'sDev.to Blog" 
                    href="https://dev.to/yaycake">
                    <img className={styles.social_icons} 
                        // src={Dev}
                        src= "../dev.svg"
                        />
                </a>
            </li>
            <li className={styles.socialMenu__item}><Link aria-label="Grace's Resume" to="/resume"><img className={styles.social_icons} src={Resume}></img></Link></li>
        </ul>
    )
}

export default SocialMenu;