import React from "react";
import "./MyInfo.css";
import { Link } from "react-router-dom";

export default function MyInfo() {
  return (
    <div className="main-div-info">
      {/* <img className="img1" src="./Images/bg3.jpg" alt="" /> */}
      <div className="my-info">
        <div className="left-info-box">
          <h1>Hi!</h1>
          <h2>I am Aarav Gavshinde</h2>
          <h3>MERN Stack Developer</h3>
          <div className="hireme">
            <Link to='/hireme'><button> Hire Me </button></Link> 
          </div>
        </div>
      </div>
    </div>
  );
}
