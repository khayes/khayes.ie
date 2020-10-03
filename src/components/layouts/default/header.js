import React from "react"
import { Link } from "gatsby"
import styles from './header.module.scss'
import aboutImage from './about.svg'
import resumeImage from './resume.svg'

export default function Header() {
  return <header className={styles.header}>
      <hgroup>
        <h2>Kieran Hayes</h2>
        <h3>Senior Software Engineer</h3>
      </hgroup>
      <nav className={styles.icons}>
          <Link to='/about'>
            <img src={aboutImage} alt="About" /> About
          </Link>
          <Link to='/resume'>
                <img src={resumeImage} alt="Résumé" /> Résumé
          </Link>
      </nav>

      {/* Hack for IE layout as it does not support css grid. */}
      <div className={styles.clear}></div>
    </header>;
}