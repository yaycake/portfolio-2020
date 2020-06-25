import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MenuToggle from "./MenuToggle"
import MobileMenu from "./MobileMenu"
import styles from './Section.module.scss' 

const Section = ({title, action, link, text, children}) => {
    return (
        <section className={styles.section_wrapper}>
            <div className={styles.section_header}>
                <h2 className={styles.section_title}>{ title }</h2>
                <h4 className={styles.section_action_desktop}><a href={ link }>{ action } &#8594;</a></h4>
            </div>
            <p className={styles.section_text}>
                { text }
            </p>

            {/* <div className={styles.section_image_child}> */}
                {children}
            {/* </div> */}

            <h4 className={styles.section_action_mobile}><a href={ link }>{ action } &#8594;</a></h4>

        </section>
    )
}

export default Section; 