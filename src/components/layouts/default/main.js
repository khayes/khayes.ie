import React from 'react'
import styles from './main.module.scss'

export default function Main({children}) {
    return <main className={styles.main}>
                <div className={styles.mainContent}>{children}</div>
            </main>
}