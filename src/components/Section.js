import React from "react"
import { Link } from "gatsby"
import CuteNavLink from "./cuteNavLink"
import styles from './Section.module.scss' 

const Section = ({title, action, link, text, children}) => {

    let templateLink; 

    if (link){
        templateLink = 
        (<div className={styles.section_action_desktop}>
            <CuteNavLink 
            path = { link }
            altText={action}
            external={false}
            >
                <h4>{action} &#8594;</h4></CuteNavLink>

           
        </div>)
       
        // <h4 className={styles.section_action_desktop}><a href={ link }>{ action } </a></h4>
    }
    return (
        <section className={styles.section_wrapper}>
            <div className={styles.section_header}>
                <h2 className={styles.section_title}>{ title }</h2>
                {link && templateLink}
            </div>
            <h3 className={styles.section_text}>
                { text }
            </h3>

            {/* <div className={styles.section_image_child}> */}
                {children}
            {/* </div> */}

            <h3 className={styles.section_action_mobile}><a href={ link }>{ action } &#8594;</a></h3>

        </section>
    )
}

export default Section; 