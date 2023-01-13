import React from 'react'
import styles from '../assets/styles/AboutBody.module.css'
import Section from './sections/Section'

export default function AboutBody(props) {
  return (
    <Section container={'container'}>
        <div className={styles.box}>
            <div className={`mb-3 ${styles.image}`}>
                <img src={props.image} />
            </div>
            <div className={`mb-3 ${styles.text}`}>
                {props.children}
            </div>
        </div>
    </Section>
  )
}
