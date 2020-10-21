import React from "react"
import { Link } from "gatsby"
import styles from './SmallProjectTile.module.scss'
import Image from "gatsby-image"

const SmallProjectTile = ({title, path, featuredImage, slug, category }) => {
    return (
        
            <div className={styles.tile_wrapper}>
                <Link className={styles.tile_link} 
                    to={ slug }
                    aria-label={`${title} Project`}
                    >
                    <span className={styles.projectSpot}></span>
                    <Image 
                        className={styles.tile_image} 
                        fluid ={featuredImage } 
                        aria-label={ title }
                        title = { title }
                        ></Image>
                    <div className={styles.tile_text}>
                        <small className={styles.tile_category}> { category } </small>
                        <br></br>
                        <span className={styles.tile_title}>
                            { title }
                        </span>
                    </div>
                </Link>
            </div>
    )
}

export default SmallProjectTile;