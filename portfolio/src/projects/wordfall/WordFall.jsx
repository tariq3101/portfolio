import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import wordfall1 from "./images/wordfall1.png";
import wordfall2 from "./images/wordfall2.png";
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

const WordFall = () => {
    const projectImages = [
        wordfall1, wordfall2
    ];

    return (
        <div>
            <Navbar />
            <div className='container'>
                <ImageCarousel images={projectImages} />
                <div className="project-content">
                    <h2>WordFall</h2>
                    <p>
                        WordFall is a fun, fast-paced typing game where words fall from the top of
                        the screen, and players must type them before they hit the bottom. Players can
                        choose difficulty levels—easy, medium, or hard—and score points based on the number
                        of words typed correctly, improving their typing speed along the way.
                    </p>
                </div>
                <h2>Technologies</h2>
                <ul className="tech-tools">
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
                    <a href="https://word-fall-alpha.vercel.app/"><button type="button" class="project-btn">Demo</button></a>
                    <a href="https://github.com/tariq3101/WordFall" ><button type="button" class="project-btn">Source Code &lt;/&gt;</button></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default WordFall;
