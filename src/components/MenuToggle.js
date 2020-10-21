import React from "react"
import styles from './MenuToggle.module.scss'

const MenuToggle = ({clicked, showMenu, keyed}) => {

    let toggleIcon; 

    if (showMenu) {
        toggleIcon = ( <div className={[styles.x, styles.x2].join(' ')}></div>)
    } else { 
        toggleIcon = ( <div className={[styles.x, styles.x1].join(' ')}></div> )
    }

    return (
        <div aria-label="Toggle mobile menu" role = "button" onClick={clicked} onKeyUp={keyed} className={styles.header__menuToggle} 
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