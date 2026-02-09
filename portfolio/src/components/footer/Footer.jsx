import React from 'react'
import './Footer.css'
import instagram from './images/instagram.png'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import twitter from './images/twitter.png'

const Footer = () => {
    return (
        <footer>
            <div className="fcontainer">
                <div className="social-logo">
                    <ul>
                        <li><a href="https://www.instagram.com/_khantariq_/"><img src={instagram} alt='instagram'></img></a></li>
                        <li><a href="https://github.com/tariq3101/"><img src={github} alt='github'></img></a></li>
                        <li><a href="https://www.linkedin.com/in/tariq-khan-30088931a/"><img src={linkedin} alt='linkedin'></img></a></li>
                        <li><a href='https://x.com/_khantariq_'><img src={twitter} alt='twitter'></img></a></li>
                    </ul>
                </div>
                <p>Tariq Khan &copy; 2026.</p>
            </div>
        </footer>
    )
}

export default Footer
