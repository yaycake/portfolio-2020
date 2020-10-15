import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import styles from './SmallProjectTile.module.scss'
import Image from "gatsby-image"

const SmallProjectTile = ({title, path, featuredImage, slug, category }) => {

    return (
        
            <div className={styles.tile_wrapper}>
                <Link to={ slug }>
                    <Image className={styles.tile_image} fluid ={featuredImage }></Image>
                    <div className={styles.tile_text}>
                        <small className={styles.tile_category}> { category } </small>
                        <h3 className={styles.tile_title}>
                            { title }
                        </h3>
                    </div>
                </Link>
            </div>
    )
}

export default SmallProjectTile;