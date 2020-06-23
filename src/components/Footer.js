import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer_wrapper}>
            <div className={styles.footer_section_wrapper}>
                <div className={styles.footer_section}>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                </div>
                <div className={styles.footer_section}>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                </div>
                <div className={styles.footer_section}>
                    <p>Text</p>
                    <p>Text</p>
                    <p>Text</p>
                </div>
            </div>
            <div className={styles.footer_bottom}>
                Website Design &amp; Code <br />
                By Grace Yang <br />
                C 2020
            </div>
        </div>
    )
}

export default Footer; 