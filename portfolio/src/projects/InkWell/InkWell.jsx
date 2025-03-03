import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import inkwell1 from "./images/InkWell1.png";
import inkwell2 from "./images/inkwell2.png";
import inkwell3 from "./images/inkwell3.png";
import inkwell4 from "./images/inkwell4.png";
import inkwell5 from "./images/inkwell5.png";
import inkwell6 from "./images/inkwell6.png";
import mongodb from "../../techlogo/mongodb.svg"
import express from "../../techlogo/express.png"
import react from "../../techlogo/react.png"
import nodejs from "../../techlogo/node.png"

import './InkWell.css'; // Import the new CSS file

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
    const projectImages = [
        inkwell1, inkwell2, inkwell3, inkwell4, inkwell5, inkwell6
    ];

    return (
        <div>
            <Navbar />
            <div className='container'>
                <ImageCarousel images={projectImages} />
                <div className="project-content">
                    <h2>InkWell</h2>
                    <p>
                        InkWell aims to provide an innovative and engaging blogging experience by
                        leveraging the power of the MERN stack. With its user-friendly interface,
                        dynamic content handling, and real-time updates, InkWell stands out as a modern,
                        robust platform for both authors and readers. The unique feature of post summarization
                        ensures that users can quickly grasp the essence of each post, making content consumption
                        more efficient and enjoyable. This forward-thinking approach positions InkWell as a versatile
                        and scalable solution, ready to meet the evolving needs of the digital age.
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
                    <a href="https://ink-welll.vercel.app/"><button type="button" class="project-btn">Demo</button></a>
                    <a href="https://github.com/tariq3101/InkWell" ><button type="button" class="project-btn">Source Code &lt;/&gt;</button></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default InkWell;
