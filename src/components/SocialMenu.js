import React from "react"
import { Link } from "gatsby"
import styles from './SocialMenu.module.scss'

const SocialMenu = () => {
  
    return (
        <ul className={styles.socialMenu}>
            <li className={styles.socialMenu__item}>
                <a aria-label="Grace's Github" href="https://github.com/yaycake" title="Grace's Github">
                    <img 
                        alt = "Github "
                        className={styles.social_icons} 
                        src = "/github-48.png"
                    ></img>
                </a>
            </li>
            <li className={styles.socialMenu__item}>
                <a aria-label="Grace's LinkedIn Profile" 
                    href="https://www.linkedin.com/in/ygrace/" 
                    title="Grace's LinkedIn">
                        <img 
                        alt="Linkedin"
                        className={styles.social_icons} 
                        src="/linkedin-48.png"
                        ></img>
                </a>
            </li>
            <li className={styles.socialMenu__item}> 
                <a aria-label="Grace'sDev.to Blog" 
                    href="https://dev.to/yaycake">
                    <img 
                        alt = "Dev.to Blog"
                        className={styles.social_icons} 
                        src= "/dev.svg"
                        />
                </a>
            </li>
            <li className={styles.socialMenu__item}>
                <Link aria-label="Grace's Resume" 
                to="/resume">
                    <img 
                        alt = "Resumé"
                        className={styles.social_icons} 
                        src = "/resume-48.png"
                        ></img>
                </Link>
            </li>
        </ul>
    )
}

export default SocialMenu;