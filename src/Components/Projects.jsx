import React from "react";
import "./Projects.css";

export default function Projects() {
    return (
        <div className="main-projects-div">
            {/* <img className="img4" src="./Images/bg2.jpg" alt="" /> */}
            <div className="projects">
                <div className="portfolio proj">
                    <img className="proj-img" src="./Images/proj1.jpg" alt="" />
                    <h4>This portfolio website</h4>
                    <div>Portfolio is a resume but in a cool way! </div>
                    <h6>
                        Technologies Used: <i> React.js, jQuery, HTML, CSS, JavaScript </i>
                    </h6>
                    <div>
                        <a href="/" target="_blank" >
                            Visit home page
                            <i className="fa fa-external-link-square" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <div className="e-commerce proj">
                    <img className="proj-img" src="./Images/proj2.jpg" alt="" />
                    <h4>Electronics Shop</h4>
                    <div>
                        It is an e-commerce website which contains various electronics
                        products that can be added to cart like any e-commerce.
                    </div>
                    <h6>
                        Technologies Used:
                        <i> React.js, HTML, CSS, JavaScript, Node.js, Express.js, MongoDB</i>
                    </h6>
                    <div>
                        <a href="https://e-shop-ecommerce.onrender.com/" target="_blank" >
                            See Live
                            <i className="fa fa-external-link-square" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <div className="todo proj">
                    <img className="proj-img" src="./Images/proj3.jpg" alt="" />
                    <h4>To-Do List App</h4>
                    <div>
                        Using this To-do list one can add, edit, delete or mark tasks as
                        done. It uses local storage to store tasks!
                    </div>
                    <h6>Technologies Used: <i>React.js, HTML, CSS, JavaScript</i></h6>
                    <div>
                        <a href="https://todoapp-6fxj.onrender.com/" target="_blank" >
                            See Live
                            <i className="fa fa-external-link-square" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>

                <div className="word proj">
                    <img className="proj-img" src="./Images/proj4.jpg" alt="" />
                    <h4>Word Converter App</h4>
                    <div>
                        This app can convert input data into uppercase or lowercase. It
                        removes white-spaces, return count words and characters. It can be
                        used to perform other functions such as copy text, delete text, etc.
                    </div>
                    <h6>Technologies Used: <i> React.js, HTML, CSS, JavaScript, Bootstrap </i></h6>
                    <div>
                        <a href="https://word-converter-react.onrender.com/" target="_blank" >
                            See Live
                            <i className="fa fa-external-link-square" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
