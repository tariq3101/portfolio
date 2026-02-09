import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import library1 from "./images/library1.png";
import library2 from "./images/library2.png";
import library3 from "./images/library3.png";
import library4 from "./images/library4.png";
import library5 from "./images/library5.png";
import library6 from "./images/library6.png";
import java from "../../techlogo/java.png"
import mysql from "../../techlogo/MySql.png"
import './Library.css'

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
                    className="carousel-image1"
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
        library1, library2, library3, library4, library5, library6
    ];

    return (
        <div>
            <Navbar />
            <div className='container'>
                <ImageCarousel images={projectImages} />
                <div className="project-content">
                    <h2>Library Management System</h2>
                    <p>
                        Libraries are essential in providing access to vast resources, and efficient management
                        is crucial to meet modern demands. A Library Management System (LMS) streamlines library
                        operations, enabling seamless access, borrowing, and interaction with resources.
                        By automating tasks like book issuance, returns, and user management, the LMS simplifies
                        processes for librarians and enhances user experience. While traditional systems lack
                        advanced features like recommendation engines, the proposed system focuses on incorporating
                        these enhancements to save time and improve overall efficiency for both librarians and members.
                    </p>
                </div>
                <h2>Technologies</h2>
                <ul className="tech-tools">
                    <li>
                        <img src={java} alt="Java Logo" className="tech-logo" />
                        Java
                    </li>
                    <li>
                        <img src={mysql} alt="MySql Logo" className="tech-logo" />
                        MySql
                    </li>
                </ul>
                <div className="project-button">
                    {/* <a href="https://tic-tac-toe-gules-one.vercel.app/"><button type="button" className="project-btn">Demo</button></a> */}
                    <a href=" https://github.com/tariq3101/library-management"><button type="button" className="project-btn">Source Code &lt;/&gt;</button></a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default InkWell;
