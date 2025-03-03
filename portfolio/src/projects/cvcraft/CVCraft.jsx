import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import cvcraft1 from "./images/cvcraft1.png";
import cvcraft2 from "./images/cvcraft2.png";
import cvcraft3 from "./images/cvcraft3.png";
import cvcraft4 from "./images/cvcraft4.png";
import cvcraft5 from "./images/cvcraft5.png";
import cvcraft6 from "./images/cvcraft6.png";
import mongodb from "../../techlogo/mongodb.svg"
import express from "../../techlogo/express.png"
import react from "../../techlogo/react.png"
import nodejs from "../../techlogo/node.png"

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

const CVCraft = () => {
    const projectImages = [
        cvcraft1, cvcraft2, cvcraft3, cvcraft4, cvcraft5, cvcraft6
    ];

    return (
        <div>
            <Navbar />
            <div className='container'>
                <ImageCarousel images={projectImages} />
                <div className="project-content">
                    <h2>CVCraft</h2>
                    <p>
                        CVCraft is a powerful and user-friendly resume builder designed
                        to help job seekers create professional, ATS-friendly resumes with ease.
                        Whether you're a fresh graduate or an experienced professional, CVCraft
                        provides customizable templates, intuitive editing tools, and an auto-save
                        feature to ensure a seamless resume-building experience. With secure data
                        storage and easy export options, you can craft, update, and share your resume in minutes.
                        Stand out from the crowd with CVCraft!
                    </p>
                </div>
                <h2>Technologies</h2>
                <ul className="tech-tools">
                    <li>
                        <img src={mongodb} alt="MongoDB Logo" className="tech-logo" />
                        MongoDB
                    </li>
                    <li>
                        <img src={express} alt="Express Logo" className="tech-logo" />
                        Express.js
                    </li>
                    <li>
                        <img src={react} alt="React Logo" className="tech-logo" />
                        React
                    </li>
                    <li>
                        <img src={nodejs} alt="Nodejs Logo" className="tech-logo" />
                        Nodejs
                    </li>
                </ul>
                <div class="project-button">
                    <a href="https://cvcraft-rho.vercel.app/"><button type="button" class="project-btn">Demo</button></a>
                    <a href="https://github.com/tariq3101/Resume_builder" ><button type="button" class="project-btn">Source Code &lt;/&gt;</button></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CVCraft;
