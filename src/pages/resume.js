import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Button from "../components/button"
import styles from "./resume.module.scss"

import resume from "../resume_9_27_19.pdf"


const Resume = (props) => {
    const siteTitle="Resumé"

    return (
        <Layout  location={props.location} title={siteTitle}>

            <h1 className={styles.page_title}>Resumé</h1>

            <div className={styles.resume_wrapper} >
                <iframe className={styles.resume_pdf} src={resume} >
                </iframe>
            </div>

        </Layout>
    )

}

export default Resume; 