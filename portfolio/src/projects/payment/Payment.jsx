import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import pg1 from "./images/pg1.png";
import pg2 from "./images/pg2.png";
import pg3 from "./images/pg3.png";
import pg4 from "./images/pg4.png";
import pg5 from "./images/pg5.png";
import pg6 from "./images/pg6.png";
import pg7 from "./images/pg6.png";
import pg8 from "./images/pg6.png";
import pg9 from "./images/pg6.png";
import mongodb from "../../techlogo/mongodb.svg"
import express from "../../techlogo/express.png"
import react from "../../techlogo/react.png"
import nodejs from "../../techlogo/node.png"
import typescript from "../../techlogo/typescript.png"
import tailwind from "../../techlogo/tailwind.png"

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

const Payment = () => {
    window.scrollTo(0, 0);
    const projectImages = [
        pg1, pg2, pg3, pg4, pg5, pg6, pg7, pg8, pg9,
    ];

    return (
        <div>
            <Navbar />
            <div className='container'>
                <ImageCarousel images={projectImages} />
                <div className="project-content">
                    <h2>Payment Gateway</h2>
                    <p>
                    A school payment management system with a backend (API) and a frontend (web interface). 
                    The project helps streamline fee management, student payments, and reporting by integrating 
                    modern web technologies. This project provides a full-stack application to manage school payment processes. It consists of:
                    Backend (API): Handles authentication, payment processing, and data storage.
                    Frontend (UI): A web-based dashboard for students, staff, and administrators to interact with the system.
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
                    <li>
                        <img src={typescript} alt="Typescript Logo" className="tech-logo" />
                        Typescript
                    </li>
                    <li>
                        <img src={tailwind} alt="Tailwind Logo" className="tech-logo" />
                        Tailwind CSS
                    </li>
                </ul>
                <div class="project-button">
                    <a href="https://school-payment-frontend-lime.vercel.app/"><button type="button" class="project-btn">Demo</button></a>
                    <a href="https://github.com/tariq3101/school-payment" ><button type="button" class="project-btn">Source Code &lt;/&gt;</button></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Payment;
