import React from 'react'
import './Education.css'

export default function Education() {
    return (
        <div className='main-education-div'>
            {/* <img className='img8' src="./Images/bg2.jpg" alt="" /> */}
            <div className='education'>
                <div className='college ebox'>
                    <h4>Samrat Ashok Technological Institute, Vidisha - 464001 (M.P.)</h4>
                    <h3>B.Tech - Computer Science and Engineering - 2021 - Current (7.61 CGPA)</h3>
                </div>
                <div className='school2 ebox'>
                    <h4>Vinay Bal Mandir, Khargone - 451001 (M.P.)</h4>
                    <h3>12th Board (M.P. Board) - 89.2% - Completed in 2021</h3>
                </div>
                <div className='school1 ebox'>
                    <h4>Aditya Vidya Vihar, Khargone - 451001 (M.P.) </h4>
                    <h3>10th Board (CBSE) - 89.2% - Completed in 2019</h3>
                </div>
                <div className='jee ebox'>
                    <h4>JEE Main Score 2021 - <span>87.7 Percentile</span></h4>
                    <h3>Qualified for JEE Advanced</h3>
                </div>
            </div>
        </div>
    )
}
