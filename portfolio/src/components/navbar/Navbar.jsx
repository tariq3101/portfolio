import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'

const Navbar = () => {
    const handleHamburgerClick = () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    };
    return (
        <header>
            <nav className="navbar">
                <a href="/"> 
                    <div className="logo">
                        <div className="img">
                            <img src={logo} alt="About Me" style={{ width: '40px', height: '40px' }} />
                        </div>
                        <div className="name">
                            <h2>Tariq Khan</h2>
                            <h6>Software Engineer</h6>
                        </div>
                    </div>
                </a>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                    <li><a href="https://drive.google.com/file/d/1ETOBTqDYdKD9EuBNUaZK_HnuYN1AJb4d/view?usp=sharing" target='_blank' rel="noreferrer">Resume</a></li>
                    <li><a href="https://github.com/tariq3101" target='_blank' rel="noreferrer">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/tariq-khan-30088931a/" target='_blank' rel="noreferrer">LinkedIn</a></li>
                </ul>
                <div className="hamburger" id="hamburger" onClick={handleHamburgerClick}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
