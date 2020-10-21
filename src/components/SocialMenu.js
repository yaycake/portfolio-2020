import React from "react"
import { Link } from "gatsby"
import styles from './SocialMenu.module.scss'

// import github from '../images/icons/github-48.png'
// import resume from '../images/icons/resume-48.png'
// import linkedin from '../images/icons/linkedin-48.png'
// import dev from '../images/icons/dev.svg'

import github from './github-48.png'
import resume from './resume-48.png'
import linkedin from './linkedin-48.png'
import dev from './dev.svg'

const SocialMenu = () => {
    console.log(github)
    console.log(resume)
    console.log(linkedin)
    console.log(dev)


    console.log(typeof github)
    console.log(typeof resume)
    console.log(typeof linkedin)
    console.log(typeof dev)
    return (
        <ul className={styles.socialMenu}>
            <li className={styles.socialMenu__item}>
                <a aria-label="Grace's Github" href="https://github.com/yaycake" title="Grace's Github">
                    <img 
                    className={styles.social_icons} 
                    src={github}
                    // src = "../github-48.png"
                    ></img>
                </a>
            </li>
            <li className={styles.socialMenu__item}>
                <a aria-label="Grace's LinkedIn Profile" 
                    href="https://www.linkedin.com/in/ygrace/" 
                    title="Grace's LinkedIn">
                        <img className={styles.social_icons} 
                        src={linkedin}
                        // src="../linkedin-48.png"
                        ></img>
                </a>
            </li>
            <li className={styles.socialMenu__item}> 
                <a aria-label="Grace'sDev.to Blog" 
                    href="https://dev.to/yaycake">
                    <img className={styles.social_icons} 
                        src={dev}
                        // src= "../dev.svg"
                        />
                </a>
            </li>
            <li className={styles.socialMenu__item}>
                <Link aria-label="Grace's Resume" 
                to="/resume">
                    <img 
                        className={styles.social_icons} 
                        src={resume}
                        // src = "../resume-48.png"
                        ></img>
                </Link>
            </li>
        </ul>
    )
}

export default SocialMenu;