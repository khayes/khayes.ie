import React from 'react'
import styles from './footer.module.scss'

export default function Footer() {
    return     <footer className={styles.footer}>
    <nav className="icons">
      <a href="https://github.com/khayes/" title="GitHub" target="_blank" rel="noreferrer">
        <img src="{{ '/assets/icons/github.svg' | relative_url }}" alt="GitHub" /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/kieran-hayes/" title="LinkedIn" target="_blank" rel="noreferrer">
        <img src="{{ '/assets/icons/linkedin.svg' | relative_url }}" alt="LinkedIn" /> LinkedIn
      </a>
    </nav>
  </footer>;
}