import React from "react"
import styles from './resume.module.scss'
import SEO from '../components/seo'

function Header() {
    return <header className={styles.header}>
        <h1>Kieran Hayes</h1>
        <h5>Senior Software Engineer</h5>
        <nav>
            <a href="mailto:kieran@khayes.ie" title="kieran@khayes.ie" target="_blank" rel="noreferrer">
                <img src={'/images/email.svg'} alt="Email" />
                <span>kieran@khayes.ie</span>
            </a>
            <a href="https://github.com/khayes/" title="GitHub" target="_blank" rel="noreferrer">
                <img src={'/images/github.svg'} alt="GitHub" />
                <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/kieran-hayes/" title="LinkedIn" target="_blank" rel="noreferrer">
                <img src={'/images/linkedin.svg'} alt="LinkedIn" />
                <span>LinkedIn</span>
            </a>
        </nav>
    </header>
}

function Experience() {
    return <section className={styles.experience}>
        <h2>Experience</h2>
        <section>
            <hgroup>
                <h5>Software Engineer</h5>
                <h6>March 2017 - December 2018</h6>
            </hgroup>
            <address className={styles.blizzardEntertainment}>Blizzard Entertainment, Blackpool, Co. Cork, Ireland</address>
            <ul>
                <li>Ensured GDPR compliance of customer support applications.</li>
                <li>Led migration of applications to .NET Core & Docker.</li>
                <li>On-call engineer ensuring 99.99% availability of applications.</li>
                <li>Developed CI/CD tooling for MySQL databases.</li>
            </ul>
        </section>
        <section>
            <hgroup>
                <h5>Associate Software Engineer</h5>
                <h6>September 2015 - March 2017</h6>
            </hgroup>
            <address className={styles.blizzardEntertainment}>Blizzard Entertainment, Blackpool, Co. Cork, Ireland</address>
            <ul>
                <li>Responsible for performance of customer support applications built with ASP.NET, WCF, WPF, AngularJS, MySQL, RabbitMQ & Couchbase.</li>
                <li>On-call engineer ensuring 99.99% availability of applications.</li>
                <li>Refactored and migrated critical legacy systems.</li>
            </ul>
        </section>
        <section>
            <hgroup>
                <h5>Tools Developer</h5>
                <h6>November 2012 - September 2015</h6>
            </hgroup>
            <address className={styles.blizzardEntertainment}>Blizzard Entertainment, Blackpool, Co. Cork, Ireland</address>
            <ul>
                <li>Created real time dashboards with SignalR and AngularJS.</li>
                <li>Built ASP.NET, Lua tools for generating interactive in-game training modules.</li>
                <li>Developed a CMS for news updates using WPF, WCF and SQL Server.</li>
                <li>Engineered a chat bot to assist new players in-game.</li>
            </ul>
        </section>
        <section>
            <hgroup>
                <h5>Customer Support Representative</h5>
                <h6>December 2007 - November 2012</h6>
            </hgroup>
            <address className={styles.blizzardEntertainment}>Blizzard Entertainment, Blackpool, Co. Cork, Ireland</address>
            <ul>
                <li>Provided technical support for players.</li>
                <li>Training, onboarding and mentoring of new hires.</li>
                <li>Developed ad-hoc tools using Lua to address workflow inefficiencies.</li>
            </ul>
        </section>
    </section>
}

function Education() {
    return <section className={styles.education}>
    <h2>Education</h2>
    <section>
        <hgroup>
            <h5>Higher National Diploma</h5>
            <h6>2001 - 2003</h6>
        </hgroup>
        <address className={styles.btech}>Bray Senior College, Bray, Co. Wicklow, Ireland</address>
        <ul>
            <li>Graduated with distinctions.</li>
            <li>Awarded "Student of the Year" upon graduation.</li>
            <li>Responsible for multimedia elements of the annual fashion show.</li>
        </ul>
    </section>
</section>
}

function Skills() {
    return <section className={styles.skills}>
    <h2>Skills</h2>
    <ul>
        <li>C#</li>
        <li>SQL</li>
        <li>Lua</li>
        <li>Docker</li>
        <li>ASP.NET Core</li>
        <li>WCF</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>JavaScript</li>
    </ul>
</section>
}

function Honors() {
    return <section className={styles.honors}>
    <h2>Honors</h2>
    <ul>
        <li>
            <span>Global Hackathon Finalist, 2018</span>
            <address>Blizzard Entertainment</address>
        </li>
        <li>
            <span>Best Training Programme, 2014</span>
            <address>CCMA Ireland</address>
        </li>
        <li>
            <span>Recognize Award, 2013</span>
            <address>Blizzard Entertainment</address>
        </li>
        <li>
            <span>Student of the Year. 2003</span>
            <address>Bray Senior College</address>
        </li>
    </ul>
</section>
}

function Footer() {
    return <footer className={styles.footer}><a href='Kieran%20Hayes%20-%20Résumé.pdf' download>Download printable version.</a></footer>
}

export default function Resume() {
  return <React.Fragment >
            <SEO title='Kieran Hayes Résumé' />
            <div className={styles.resume}>
            <article>
                <Header />
                <Experience />
                <Education />
                <Skills />
                <Honors />
                <Footer />
            </article>
            </div>
         </React.Fragment>;
}