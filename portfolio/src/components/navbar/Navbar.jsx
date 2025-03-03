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
                <div className="logo">
                    <div className="img">
                        <img src={logo} alt="About Me" style={{ width: '40px', height: '40px' }} />
                    </div>
                    <div className="name">
                        <h2>Tariq Khan</h2>
                        <h6>Software Engineer</h6>
                    </div>
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact Me</a></li>
                    <li><a href="https://tariq-resume.tiiny.site/">Resume</a></li>
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
