import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./resume.module.scss"
import resume from "../resume_9_27_19.pdf"


const Resume = (props) => {
    const siteTitle="Resumé"

    return (
        <Layout  location={props.location} title={siteTitle}>
            <SEO
                title="Grace's Resumé"
                keywords = { ['design', 'front end development', 'user experience design', 'user interaction design', 'javascript', 'consulting']}
            />
            <h1 className={styles.page_title}>Resumé</h1>

            <div className={styles.resume_wrapper} >
                <iframe title = "My Resumé" className={styles.resume_pdf} src={resume} >
                </iframe>
            </div>

        </Layout>
    )

}

export default Resume; 