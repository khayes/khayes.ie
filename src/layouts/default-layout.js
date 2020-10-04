import React from 'react'
import {Link} from 'gatsby'
import styles from './default-layout.module.scss'

function Container({children}) {
    return <div className={styles.container}>{children}</div>
}

function Header() {
    return <header className={styles.header}>
        <hgroup>
          <h2>Kieran Hayes</h2>
          <h3>Senior Software Engineer</h3>
        </hgroup>
        <nav className={styles.icons}>
            <Link to={'/about'}>
              <img src={'/images/about.svg'} alt="About" /> About
            </Link>
            <Link to='/resume'>
                  <img src={'/images/resume.svg'} alt="Résumé" /> Résumé
            </Link>
        </nav>
  
        {/* Hack for IE layout as it does not support css grid. */}
        <div className={styles.clear}></div>
      </header>;
}

function Main({children}) {
    return <main className={styles.main}>
                <div className={styles.mainContent}>{children}</div>
            </main>
}

function Footer() {
    return     <footer className={styles.footer}>
    <nav>
      <a href="https://github.com/khayes/" title="GitHub" target="_blank" rel="noreferrer">
        <img src={'/images/github.svg'} alt="GitHub" /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/kieran-hayes/" title="LinkedIn" target="_blank" rel="noreferrer">
        <img src={'/images/linkedin.svg'} alt="LinkedIn" /> LinkedIn
      </a>
    </nav>
  </footer>;
}

export default function DefaultLayout({children}) {
    return <Container>
                <Header />
                <Main>{children}</Main>
                <Footer />
           </Container>;
}