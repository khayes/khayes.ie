import React from "react"
import { Link } from "gatsby"
import styles from './header.module.scss'

export default function Header() {
  return <header className={styles.header}>
      <hgroup>
        <h2>Kieran Hayes</h2>
        <h3 className="subtitle">Software Engineer</h3>
      </hgroup>
      <nav className="icons">
          <Link to='/about'>
            <img src="{{ '/assets/icons/about.svg' | relative_url }}" alt="About" /> About
          </Link>
          <Link to='/resume'>
                <img src="{{ '/assets/icons/resume.svg' | relative_url }}" alt="Résumé" /> Résumé
          </Link>
      </nav>

      {/* Hack for IE layout as it does not support css grid. */}
      <div className="clear"></div>
    </header>;
}