import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import asset1 from "./images/asset1.png";
import asset2 from "./images/asset2.png";
import asset3 from "./images/asset3.png";
import asset4 from "./images/asset4.png";
import asset5 from "./images/asset5.png";
import asset7 from "./images/asset7.png";
import python from "./techlogo/python.png"
import sqlite from "./techlogo/sqlite.png"

function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <img
                    src={images[currentIndex]}
                    alt={`Project ${currentIndex + 1}`}
                    className="carousel-image"
                />
            </div>
            <div className="carousel-buttons">
                <button
                    onClick={goToPrevious}
                    className="carousel-button carousel-button-left"
                >
                    Previous
                </button>
                <button
                    onClick={goToNext}
                    className="carousel-button carousel-button-right"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

const InkWell = () => {
    window.scrollTo(0, 0);
    const projectImages = [
        asset1, asset2, asset3, asset4, asset5, asset7
    ];

    return (
        <div>
            <Navbar />
            <div className='container'>
                <ImageCarousel images={projectImages} />
                <div className="project-content">
                    <h2>Asset Management System</h2>
                    <p>
                        asset management is crucial for maximizing productivity and minimizing costs.
                        This Python-based Asset Management System provides a centralized solution with a
                        Tkinter frontend and SQLite backend. It streamlines workflows, enabling users to track,
                        maintain, and optimize assets effectively. With a user-friendly interface for easy
                        navigation and a robust SQLite database for seamless data management, the system
                        ensures enhanced operational efficiency, compliance, and risk mitigation across diverse sectors.
                    </p>
                </div>
                <h2>Technologies</h2>
                <ul className="tech-tools">
                    <li>
                        <img src={python} alt="Python Logo" className="tech-logo" />
                        Python
                    </li>
                    <li>
                        <img src={sqlite} alt="Sqlite Logo" className="tech-logo" />
                        SQLite
                    </li>
                </ul>
                <div className="project-button">
                    {/* <a href="https://tic-tac-toe-gules-one.vercel.app/"><button type="button" className="project-btn">Demo</button></a> */}
                    <a href="https://github.com/tariq3101/Asset-Management-System"><button type="button" className="project-btn">Source Code &lt;/&gt;</button></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default InkWell;
