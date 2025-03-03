import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import todo1 from "./images/todo1.png";
import todo2 from "./images/todo2.png";
import todo3 from "./images/todo3.png";
import todo4 from "./images/todo4.png";
import todo5 from "./images/todo5.png";
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

const ToDo = () => {
    const projectImages = [
        todo1, todo2, todo3, todo4, todo5
    ];

    return (
        <div>
            <Navbar />
            <div className='container'>
                <ImageCarousel images={projectImages} />
                <div className="project-content">
                    <h2>ToDo</h2>
                    <p>
                        A ToDo App using the MERN stack offers users a seamless way to manage tasks efficiently.
                        It includes essential features like task creation, updates, and deletion, enabling users
                        to organize their work effortlessly. The app provides a responsive and user-friendly interface,
                        ensuring real-time updates for a smooth experience. The backend, built with Express.js and Node.js,
                        handles all CRUD operations and communicates with MongoDB to securely store and retrieve tasks.
                        This architecture ensures scalability, reliability, and efficient task management.
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
                    <a href="https://to-do-frontend-green-six.vercel.app/"><button type="button" class="project-btn">Demo</button></a>
                    <a href="https://github.com/tariq3101/to-do" ><button type="button" class="project-btn">Source Code &lt;/&gt;</button></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ToDo;
