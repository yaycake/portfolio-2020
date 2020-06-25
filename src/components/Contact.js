import React from "react"
import { Link } from "gatsby"
import styles from './Contact.module.scss' 

const Contact = () => {
    return (
        <section className={styles.index_section}>
            <div className={styles.contact_text}>
                <h2>Contact Me</h2>
                <p>If you’ve got a great idea or would like to chat about a unique opportunity, contact me today. </p>
            </div>
            <h4 className={styles.contact_action}>Let's Chat</h4>
        </section>
    )
}

export default Contact; 


