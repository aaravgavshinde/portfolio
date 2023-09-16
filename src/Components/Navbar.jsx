import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom"; 

export default function Navbar() {
  return (
    <>
      <div className="nav-list">
        <ul>
          <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to='/'>Me</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to='/skills'>Skills</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to='/projects'>Projects</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to='/resume'>Resume</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to='/certificates'>Certificates</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to='/education'>Education</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? "link-active" : "none")} to='extracurricular'>Extracurricular</NavLink></li>
        </ul>
      </div>
    </>
  );
}
