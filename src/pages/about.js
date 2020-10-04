import React from "react"
import {Link} from 'gatsby'
import DefaultLayout from '../layouts/default-layout'
import SEO from '../components/seo'

export default function About() {
  return <React.Fragment>
    <DefaultLayout>
        <SEO title='About Kieran Hayes' />
        <h1>About Me</h1>
        <p>
            My name is Kieran Hayes. I'm a software engineer based in Dublin, Ireland.<br />
            My experiences and hobbies are within the gaming industry, where I have over a decade of experience.
        </p>
        <p>
            Most notably I have created and maintained customer service applications & systems for <a href="https://www.blizzard.com/" target="_blank" rel="noreferrer">Blizzard Entertainment</a> for AAA titles such as:<br />
        </p>
        <ul>
            <li><a href="https://worldofwarcraft.com/" target="_blank" rel="noreferrer">World of Warcraft</a></li>
            <li><a href="https://playoverwatch.com/" target="_blank"  rel="noreferrer">Overwatch</a></li>
            <li><a href="https://playhearthstone.com/" target="_blank" rel="noreferrer">Hearthstone</a></li>
            <li><a href="https://diablo3.com/" target="_blank" rel="noreferrer">Diablo III</a></li>
            <li><a href="https://starcraft2.com/" target="_blank" rel="noreferrer">StarCraft II</a></li>
        </ul>

        <h3>Background</h3>
        <p>
            As a 4-5 year old I picked up a magazine that taught you how to program in <a href="https://en.wikipedia.org/wiki/Sinclair_BASIC" target="_blank" rel="noreferrer">Sinclair BASIC</a>. Ever since then I have been hooked on teaching myself how to design and create software. I have experience in multimedia, design, lecturing, customer support, operations and engineering. I have created everything from websites and business applications, to game addons and multimedia exhibitions.
        </p>
        <p>
            I don't consider myself to be someone who only rights code, though that is my roots. My passion is to build quality products end to end, and to consider the whole spectrum of what that entails. From the code that is written and executed, to what the development and user experience is surrounding that.
        </p>

        <h3>Contact Me</h3>
        <p>If you are interested in learning more about my skills or experience you can read my <Link to="/resume">résumé</Link>.<br />Or if you just want to get in touch directly you can email <a href="mailto:kieran@khayes.ie" rel="noreferrer">kieran@khayes.ie</a> or find me on <a href="https://github.com/khayes/" title="GitHub" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://www.linkedin.com/in/kieran-hayes/" title="LinkedIn" target="_blank" rel="noreferrer">LinkedIn</a>.<br /></p>
      </DefaultLayout>
    </React.Fragment>;
}