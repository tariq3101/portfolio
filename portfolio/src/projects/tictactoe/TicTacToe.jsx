import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import tictactoe1 from "./images/tictactoe1.png";
import tictactoe2 from "./images/tictactoe2.png";
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

const TicTacToe = () => {
    window.scrollTo(0, 0);
    const projectImages = [
        tictactoe1, tictactoe2
    ];

    return (
        <div>
            <Navbar />
            <div className='container'>
                <ImageCarousel images={projectImages} />
                <div className="project-content">
                    <h2>Tic Tac Toe</h2>
                    <p>
                        A simple Tic Tac Toe web app built with React, allowing users to play the game directly in
                        their browser. The app features a clean interface where players take turns marking X or O on a grid,
                        with real-time game status updates.
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
                    <a href="https://tic-tac-toe-gules-one.vercel.app/"><button type="button" class="project-btn">Demo</button></a>
                    <a href="https://github.com/tariq3101/tic-tac-toe" ><button type="button" class="project-btn">Source Code &lt;/&gt;</button></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TicTacToe;
