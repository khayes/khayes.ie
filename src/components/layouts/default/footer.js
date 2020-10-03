import React from 'react'
import styles from './footer.module.scss'
import githubImage from './github.svg'
import linkedInImage from './linkedin.svg'

export default function Footer() {
    return     <footer className={styles.footer}>
    <nav>
      <a href="https://github.com/khayes/" title="GitHub" target="_blank" rel="noreferrer">
        <img src={githubImage} alt="GitHub" /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/kieran-hayes/" title="LinkedIn" target="_blank" rel="noreferrer">
        <img src={linkedInImage} alt="LinkedIn" /> LinkedIn
      </a>
    </nav>
  </footer>;
}