import React from "react"
import { Link } from "gatsby"
import styles from "./cuteNavLink.module.scss"

const CuteNavLink = ({path, text, altText, external, children}) => {
    if (external) {
        return (
            <a 
                className={styles.cuteLink_wrapper}
                alt={altText} 
                href={path}> 
                    <span className={styles.linkSpot}></span>
                    <span className={styles.linkText}>{children} </span>
            </a>
            )
    } else {
        return (
            <Link 
                aria-label = { altText }
                className={styles.cuteLink_wrapper}
                to={path}
                alt={altText}
                activeClassName ={styles.cuteLink_wrapper_active}
            > 
        
                <span className={styles.linkSpot}></span>
                <span className={styles.linkText}>{children} </span>
            </Link>
        )
    }
}

export default CuteNavLink