import React from "react"
import Layout from "../components/layout"
import Section from "../components/Section"
import { Link } from "gatsby"
import styles from "./contact.module.scss"

const ContactPage = (props) => {

    const siteTitle = "Contact Grace"

    return (
        <Layout location = {props.location} title={siteTitle} >
            <h1 className={styles.page_title}> Contact Me</h1>
            <section> 
                <h3> Let's chat product prototyping, digital solutions, user experience, user interaction, design, and/or front end development.</h3>
            
                <p className={styles.contact_blurb}>
                    Got a question? Need help birthing an awesome idea out of your head and into the world? Just plain curious about living in Taipei, or <a href="http://instagram.com/mr.babydog">my very cute, aloof dog</a>? Feel free to reach out. <br></br>

                </p>

                <div className={styles.contact_form}>
                    <form name="contact" method="POST" data-netlify="true">
                        <div className={styles.form_inputs}>
                            <label>Your Name</label>  <input type="text" name="name" />  
                        </div>
                        <div className={styles.form_inputs}>
                            <label>Your Email </label><input type="email" name="email" />
                        </div>
                        <div className={styles.form_inputs}>
                            <label>Message </label><textarea name="message"></textarea>
                        </div>
                        <div className={styles.form_inputs}>
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </section> 
            <Section
                title="Not ready to talk?"
            >
                <div className={styles.contact_footer}>
                    <p>
                        Browse my <Link to ="/projects/">projects &#8594;</Link>
                        <br></br>
                        Check out my code on <a href="http://www.github.com/yaycake">Github &#8594;</a>
                        <br></br>
                        Read about how I code on <a href="https://dev.to/yaycake">Dev.to &#8594;</a>
                        <br></br>
                        Gawk at my <Link to="/resume">resume</Link> or <a href="https://www.linkedin.com/in/ygrace/">LinkedIn &#8594;</a> 
                    </p>
                </div>
            </Section>

           
        </Layout>    
    )
}

export default ContactPage; 