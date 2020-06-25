import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer_wrapper}>
            
            <div className={styles.footer_sections}>
                <p className={styles.footer_scrolltop}>Scroll To Top</p>
                <div className={styles.footer_section_wrapper}>
                    <div className={[styles.footer_section, styles.footer_section_1].join(' ')}>
                        <Link to="/projects"><p>Projects</p></Link>
                        <Link to="/diary"><p>Diary</p></Link>
                        <Link to="/contact"><p>Contact</p></Link>
                    </div>
                    <div className={[styles.footer_section, styles.footer_section_2].join(' ')}>
                        <a href="https://github.com/yaycake"><p>Github</p></a>
                        <a href="https://www.linkedin.com/in/ygrace/"><p>LinkedIn</p></a>
                        <Link to="/resume"><p>Resumé</p></Link>
                    </div>
                </div>

            </div>
            
            <p className={styles.footer_bottom}>
                Website Design &amp; Code <br />
                By Grace Yang <br />
                C 2020
            </p>
        </div>
    )
}

export default Footer; 