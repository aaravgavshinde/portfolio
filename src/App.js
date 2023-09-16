import React from 'react'
import Navbar from './Components/Navbar';
import './App.css'
// import MyRoutes from './Components/MyRoutes'
import Education from './Components/Education';
import Certificates from './Components/Certificates';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import MyInfo from './Components/MyInfo';
import Skills from './Components/Skills';
import Extra from './Components/Extra';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HireMe from './Components/HireMe';

function App() {

  return (
    <div id='main'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<MyInfo />} />
          <Route exact path='/hireme' element={<HireMe />} />
          <Route exact path='/skills' element={<Skills />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/resume' element={<Resume />} />
          <Route exact path='/certificates' element={<Certificates />} />
          <Route exact path='/education' element={<Education />} />
          <Route exact path='/extracurricular' element={<Extra />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
