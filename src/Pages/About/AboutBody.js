import React from 'react'
import styles from '../../Styles/AboutBody.module.css'

export default function AboutBody(props) {
  return (
    
        <div className={styles.box}>
            <div className={`mb-3 ${styles.image}`}>
                <img src={props.image} className={`img-fluid rounded`}/>
            </div>
            
            <div className={`mb-3 ${styles.text}`}>
                <p>{props.text}</p>
            </div>
        </div>
  )
}
