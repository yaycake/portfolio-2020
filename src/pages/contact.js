import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import styles from "./contact.module.scss"
import CuteNavLink from "../components/cuteNavLink"

const ContactPage = (props) => {

    const siteTitle = "Contact Grace"

    return (
        <Layout location = {props.location} title={siteTitle} >
            <SEO 
          title="About Grace"
          keywords = { ['design', 'product development', 'ux', 'ui', 'front end development', 'design', 'react']}
        />
            
            <h1 className={styles.page_title}> Contact Me</h1>
            <section> 
                <h3> Let's chat product prototyping, digital solutions, user experience, user interaction, design, and/or front end development.</h3>
            
                <p className={styles.contact_blurb}>
                    Got a question? Need help birthing an awesome idea out of your head and into the world? Just plain curious about living in Taipei, or <a href="http://instagram.com/mr.babydog">my very cute, aloof dog</a>? Feel free to reach out. <br></br>

                </p>

                <div className={styles.contact_form}>
                    <form name="contact" method="POST" data-netlify="true" >
                        <input type="hidden" name="form-name" value="contact" />
                        <div className={styles.form_inputs}>
                            <label htmlFor="formName">Your Name</label>  
                            <input id = "formName" type="text" name="name" />  
                        </div>
                        <div className={styles.form_inputs}>
                            <label htmlFor="formEmail">Your Email </label>
                            <input id = "formEmail" type="email" name="email" />
                        </div>
                        <div className={styles.form_inputs}>
                            <label htmlFor="formMessage">Message </label><textarea id = "formMessage" name="message"></textarea>
                        </div>
                        <div className={styles.form_inputs}>
                            <button className = { styles.submit_button } type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </section> 
            <Section
                title="Not ready to talk?"
            >
                <div className={styles.contact_footer}>
                    <CuteNavLink
                        path = "http://www.github.com/yaycake"
                        altText = "My Github"
                        external = { true }
                    >
                        <p>Check out my code on Github &#8594;</p>
                    </CuteNavLink>

                    <CuteNavLink
                        path = "https://dev.to/yaycake"
                        altText = "My Dev.to blog"
                        external = { true }
                    >
                        <p>Read about how I code &#8594;</p>
                    </CuteNavLink>

                    <CuteNavLink
                        path = "https://www.linkedin.com/in/ygrace/"
                        altText = "My LinkedIn"
                        external = { false }
                    >
                        <p>or view my LinkedIn Profile &#8594;</p>
                    </CuteNavLink>
                </div>
            </Section>

           
        </Layout>    
    )
}

export default ContactPage; 