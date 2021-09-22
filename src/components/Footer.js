import React from "react"
import { Link } from "gatsby"
import styles from './Footer.module.scss'

const Footer = () => {

    const scrollToTop = (e) => {
        window.scrollTo(0,0)
    }

    const keyToTop = (e) => {
        if (e.keyCode == 13) {
            scrollToTop()
        }
    }


    return (
        <div className={styles.footer_wrapper}>
            <div className={styles.footer_section_wrapper}>
                <div className={[styles, styles.footer_section_1].join(' ')}>
                    <Link aria-label="Projects Page" title="View Projects" className={styles.footer_links} to="/projects">Projects</Link>
                    <a aria-label="Grace's Dev.to Blog" title = "Read Grace's Blog" className={styles.footer_links} href="https://dev.to/yaycake">Blog</a>
                    <Link aria-label = "Contact Grace" title="Message Grace" className={styles.footer_links} to="/contact">Contact</Link>
                </div>

                <div className={styles.footer_section_2}>
                    <div role="button" aria-label="Scroll to top of page" className={styles.footer_scrolltop} onClick={scrollToTop} onKeyUp={keyToTop} tabIndex="0" >Scroll To Top</div>
                    <br />
                    <div className={styles.footer_credits}>
                        Website Design &amp; Code <br />
                        By Grace Yang <br />
                        C 2020
                    </div>

                    <div className={styles.footerSpot}></div>
                </div>

                <div className={[styles.footer_section, styles.footer_section_3].join(' ')}>
                    <a aria-label="Grace's Github" className={styles.footer_links} href="https://github.com/yaycake">Github</a>
                    <a aria-label="Grace's LinkedIn" className={styles.footer_links} href="https://www.linkedin.com/in/ygrace/">LinkedIn</a>
                    <Link aria-label="Grace's Resume" className={styles.footer_links} to="/resume">Resumé</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer; 