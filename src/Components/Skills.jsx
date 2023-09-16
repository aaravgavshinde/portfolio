import React from "react";
import "./Skills.css";

export default function Skills() {

    return (
        <div className="main-div-skills">
            <div className="skills-box">
                <div className="frontend s-box">
                    <h4>Front End</h4>
                    <ul>
                        <li> React.js </li>
                        <li> HTML5 </li>
                        <li> CSS3 </li>
                        <li> JavaScript </li>
                        <li> jQuery </li>
                        <li> DOM </li>
                    </ul>
                </div>
                {/* <div className="frontend-info">
                    <ul>
                        <li><span>React.js:</span> Hooks, Routing, APIs Basics, Redux Basics.. </li>
                        <li><span>HTML5:</span> Tables, Frames, Form, iframes, Media tags.. </li>
                        <li><span>CSS3:</span> Box model, Animations, Media Queries.. </li>
                        <li><span>JavaScript:</span> Functions, Arrays, Loops, Conditionals.. </li>
                        <li><span>jQuery:</span> Effects - Hide/Show, Fade, Slide, Animate.. </li>
                        <li><span>DOM:</span> Walking DOM, Table Navigation, Searching, Attributes.. </li>
                    </ul>
                </div> */}

                <div className="backend s-box">
                    <h4>Back End</h4>
                    <ul>
                        <li> Node.js </li>
                        <li> Express.js </li>
                    </ul>
                </div>
                {/* </div> */}

                {/* <div className="row2"> */}
                <div className="database s-box">
                    <h4>Database</h4>
                    <ul>
                        <li> MongoDB </li>
                    </ul>
                </div>

                <div className="additional s-box">
                    <h4>Additional</h4>
                    <ul>
                        <li> Bootstrap </li>
                        <li> Tailwind CSS </li>
                    </ul>
                </div>
                {/* </div> */}

                {/* <div className="row3"> */}
                <div className="reactjs s-box">
                    <h4>React.js</h4>
                    <ul>
                        <li> Hooks </li>
                        <li> Routing </li>
                        <li> Rest APIs Basics </li>
                        <li> Redux Basics </li>
                    </ul>
                </div>

                <div className="dsa s-box">
                    <h4>Data Structures and Algorithm</h4>
                    <ul>
                        <li> C/C++ </li>
                    </ul>
                </div>
                {/* </div> */}

                {/* <div className="row4"> */}
                <div className="tools s-box">
                    <h4>Tools and Technologies</h4>
                    <ul>
                        <li> Git/Github </li>
                        <li> Visual Studio Code </li>
                    </ul>
                </div>

                <div className="new s-box">
                    <h4>Artificial Intelligence</h4>
                    <ul>
                        <li> Prompt Engineering Basics </li>
                        <li> Generative AI Basics </li>
                    </ul>
                </div>
                {/* </div> */}

                <div className="new ss-box">
                    <h4>Soft Skills</h4>
                    <ul>
                        <li> Quick and diligent learner </li>
                        <li> Problem Solver </li>
                        <li> Analytical Thinking </li>
                        <li> Effective Communication Skills </li>
                        <li> Team-work and co-ordination </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
