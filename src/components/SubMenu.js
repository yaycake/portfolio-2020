import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from './SubMenu.module.scss'

const SubMenu = ({title, linkArray}) => {

    return (
        <ul className={styles.subMenu}>
            <li><h3>{title}</h3></li>
            { linkArray && linkArray.map((link) => {
                return (
                    <li className={styles.subMenu__item}><p>{link}</p></li>
                )
            }) }
        </ul>
    )
}

export default SubMenu; 