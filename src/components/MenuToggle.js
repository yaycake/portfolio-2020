import React from "react"
import { Link } from "gatsby"
import styled, { withTheme } from "styled-components"
import styles from './MenuToggle.module.scss'

const MenuToggle = ({clicked, showMenu}) => {

    let toggleIcon; 

    if (showMenu) {
        toggleIcon = ( <div className={[styles.x, styles.x2].join(' ')}></div>)
    } else { 
        toggleIcon = ( <div className={[styles.x, styles.x1].join(' ')}></div> )
    }

    return (
        <div onClick={clicked} className={styles.header__menuToggle} 
            style={{
                backgroundColor: showMenu ? "white" : "black", 
                border: showMenu ? "2px solid black" : "none"
            }}
        >   
            { toggleIcon }
        </div>
    )

}



    

export default MenuToggle; 