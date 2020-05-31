import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from './MenuToggle.module.scss'

const MenuToggle = () => (
    <div>
        {/* <h3
            class= {styles.header__menuToggle}
        >MENU</h3> */}

        <div className={[styles.x, styles.x1].join(' ')}></div>
        <div className={[styles.x, styles.x2].join(' ')}> </div>
    </div>
)

export default MenuToggle; 