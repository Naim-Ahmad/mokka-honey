import React from 'react'
import styles from '../assets/styles/AboutBody.module.css'

export default function AboutBody(props) {
  return (
    
        <div className={styles.box}>
            <div className={`mb-3 ${styles.image}`}>
                <img src={props.image} />
            </div>
            <div className={`mb-3 ${styles.text}`}>
                {props.children}
            </div>
        </div>
    
  )
}
