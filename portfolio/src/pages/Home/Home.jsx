import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import inkwell from "../../images/InkWell.png"
import cvcraft from "../../images/cvcraft.png"
import todo from "../../images/todo.png"
import wordfall from "../../images/wordfall.png"
import tictactoe from "../../images/tictac.png"
import asset from "../../images/asset.png"
import library from "../../images/library.png"
import tariq from "../../images/tariq.jpg"
import Footer from '../../components/footer/Footer';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';


const Home = () => {

    const inkwelld = "InkWell aims to provide an innovative and engaging blogging experience by leveraging the power of the MERN stack. With its user-friendly interface, dynamic content handling, and real-time updates, InkWell stands out as a modern, robust platform for both authors and readers. The unique feature of post summarization ensures that users can quickly grasp the essence of each post, making content consumption more efficient and enjoyable. This forward-thinking approach positions InkWell as a versatile and scalable solution, ready to meet the evolving needs of the digital age."
    const cvcraftd = "CVCraft is a powerful and user-friendly resume builder designed to help job seekers create professional, ATS-friendly resumes with ease. Whether you're a fresh graduate or an experienced professional, CVCraft provides customizable templates, intuitive editing tools, and an auto-save feature to ensure a seamless resume-building experience. With secure data storage and easy export options, you can craft, update, and share your resume in minutes. Stand out from the crowd with CVCraft!"
    const wordfalld = "WordFall is a fun, fast-paced typing game where words fall from the top of the screen, and players must type them before they hit the bottom. Players can choose difficulty levels—easy, medium, or hard—and score points based on the number of words typed correctly, improving their typing speed along the way."
    const todod = "A ToDo App using the MERN stack offers users a seamless way to manage tasks efficiently. It includes essential features like task creation, updates, and deletion, enabling users to organize their work effortlessly. The app provides a responsive and user-friendly interface, ensuring real - time updates for a smooth experience.The backend, built with Express.js and Node.js, handles all CRUD operations and communicates with MongoDB to securely store and retrieve tasks. This architecture ensures scalability, reliability, and efficient task management."
    const tictactoed = "A simple Tic Tac Toe web app built with React, allowing users to play the game directly in their browser. The app features a clean interface where players take turns marking X or O on a grid, with real-time game status updates."
    const assetd = " Asset management is crucial for maximizing productivity and minimizing costs. This Python-based Asset Management System provides a centralized solution with a Tkinter frontend and SQLite backend. It streamlines workflows, enabling users to track, maintain, and optimize assets effectively. With a user-friendly interface for easy navigation and a robust SQLite database for seamless data management, the system ensures enhanced operational efficiency, compliance, and risk mitigation across diverse sectors."
    const libraryd = "Library Management System (LMS) to automate library operations, including book transactions and member management. The system enhances user experience by integrating advanced features like recommendation engines and filters for efficient resource access."

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_rtg22sc',
            'template_osemfds',
            e.target,
            'DLGvb8f7C6OpgoWK9'
        ).then((result) => {
            console.log(result.text);
            toast.success('Email sent successfully');
        }).catch((error) => {
            console.log(error.text);
            toast.error('Failed to send message. Please try again later.')
        });

        e.target.reset();
    };

    return (
        <div>
            <Navbar />
            <section id="about">
                <div className="container about-container">
                    <div className="about-content">
                        <h2>I am Tariq Khan, A Software Engineer</h2>
                        <p>
                            I’m a final-year IT student with good knowledge of full-stack and software development. 
                            I’ve worked on several projects where I got hands-on experience in building real applications. 
                            I’m always exploring new technologies and try to improve my skills by learning something new 
                            every day. I enjoy solving problems and building useful things, and I’m excited to keep 
                            growing in this fast-changing tech world.
                        </p>
                    </div>
                    <div className="about-image">
                        <img
                            src={tariq}
                            alt="About Me"
                        />
                    </div>
                </div>
            </section>

            <section id="projects">
                <div className="container">
                    <h2 className="section-title">Projects</h2>
                    <div className="project-grid">
                        <div class="project-item">
                            <Link to="/inkwell" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div class="project-image-wrapper">
                                    <img
                                        src={inkwell}
                                        alt="Project 1" />
                                </div>
                                <h3>InkWell</h3>
                                <p>
                                    {inkwelld}
                                    {/* {inkwelld.split("", 150)}... */}
                                </p>
                            </Link>
                            <div class="project-button">
                                <a href="https://ink-welll.vercel.app/"><button type="button" class="project-btn">Demo</button></a>
                                <a href="https://github.com/tariq3101/InkWell" ><button type="button" class="project-btn">Code</button></a>
                            </div>
                        </div>

                        <div class="project-item">
                            <Link to="/cvcraft" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div class="project-image-wrapper">
                                    <img
                                        src={cvcraft}
                                        alt="Project 1" />
                                </div>
                                <h3>CVCraft</h3>
                                <p>
                                    {cvcraftd}
                                </p>
                            </Link>
                            <div class="project-button">
                                <a href="https://cvcraft-rho.vercel.app/"><button type="button" class="project-btn">Demo</button></a>
                                <a href="https://github.com/tariq3101/Resume_builder" ><button type="button" class="project-btn">Code</button></a>
                            </div>
                        </div>

                        <div class="project-item">
                            <Link to="/todo" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div class="project-image-wrapper">
                                    <img
                                        src={todo}
                                        alt="Project 2" />
                                </div>
                                <h3>ToDo</h3>
                                <p>
                                    {todod}
                                </p>
                            </Link>
                            <div class="project-button">
                                <a href="https://to-do-frontend-green-six.vercel.app/"><button type="button" class="project-btn">Demo</button></a>
                                <a href="https://github.com/tariq3101/to-do" ><button type="button" class="project-btn">Code</button></a>
                            </div>
                        </div>


                        <div className="project-item">
                            <Link to="/wordfall" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="project-image-wrapper">
                                    <img
                                        src={wordfall}
                                        alt="Project 3"
                                    />
                                </div>
                                <h3>WordFall</h3>
                                <p>
                                    {wordfalld}
                                </p>
                            </Link>
                            <div className="project-button">
                                <a href="https://word-fall-alpha.vercel.app/"><button type="button" className="project-btn">Demo</button></a>
                                <a href="https://github.com/tariq3101/WordFall"><button type="button" className="project-btn">Code</button></a>
                            </div>
                        </div>


                        <div className="project-item">
                            <Link to='/tictactoe' style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="project-image-wrapper">
                                    <img
                                        src={tictactoe}
                                        alt="Project 4"
                                    />
                                </div>
                                <h3>Tic Tac Toe</h3>
                                <p>
                                    {tictactoed}
                                </p>
                            </Link>
                            <div className="project-button">
                                <a href="https://tic-tac-toe-gules-one.vercel.app/"><button type="button" className="project-btn">Demo</button></a>
                                <a href="https://github.com/tariq3101/tic-tac-toe"><button type="button" className="project-btn">Code</button></a>
                            </div>
                        </div>


                        <div className="project-item">
                            <Link to='/asset' style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="project-image-wrapper">
                                    <img
                                        src={asset}
                                        alt="Project 5"
                                    />
                                </div>
                                <h3>Asset Management System</h3>
                                <p>
                                    {assetd}
                                </p>
                            </Link>
                            <div className="project-button">
                                {/* <a href="https://tic-tac-toe-gules-one.vercel.app/"><button type="button" className="project-btn">Demo</button></a> */}
                                <a href="https://github.com/tariq3101/Asset-Management-System"><button type="button" className="project-btn">Code</button></a>
                            </div>
                        </div>


                        <div className="project-item">
                            <Link to='/library' style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="project-image-wrapper">
                                    <img
                                        src={library}
                                        alt="Project 6"
                                    />
                                </div>
                                <h3>Library Management System</h3>
                                <p>
                                    {libraryd}
                                </p>
                            </Link>
                            <div className="project-button">
                                {/* <a href="https://tic-tac-toe-gules-one.vercel.app/"><button type="button" className="project-btn">Demo</button></a> */}
                                <a href=" https://github.com/tariq3101/library-management"><button type="button" className="project-btn">Code</button></a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container">
                    <h2>Contact Me</h2>
                    <form id="contact-form" onSubmit={sendEmail}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="from_name" required />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="reply_to" required />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>

                        <button type="submit">Send</button>
                    </form>
                    <p id="form-message"></p>
                </div>
            </section>
            <ToastContainer />
            <Footer />
        </div>
    )
}

export default Home