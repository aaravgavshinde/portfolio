import React from 'react'
import './HireMe.css'

export default function HireMe() {
    return (
        <div className='hireme-main-div'>
            <div className='hireme-head'>
                <h4>Liked my profile? Why not give me a chance!</h4>
            </div>
            <div className='main-box'>
                <div className='contact'>
                    <h3><a href="https://www.linkedin.com/in/aarav-gavshinde/" target='_blank'> <img className='linkedin logo' src="./Images/linkedin-c.png" alt="" />Aarav Gavshinde </a></h3>
                    <h3><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWrRlQHQTTJqnwxJJkkgTcgzmvgjhScvhdqspVTwlvZlQHszdcsJsxSGDxttPRlXcxDFdxskV" target='_blank'> <img className='mail logo' src="./Images/mail-c.png" alt="" />aaravgavshinde@gmail.com </a></h3>
                    <h3><a href="https://www.instagram.com/aaravgavshinde/" target='_blank'> <img className='insta logo' src="./Images/insta-c.png" alt="" />Aarav Gavshinde </a></h3>
                </div>
                <div className='experience'>
                    <h4>Job / Work Experience:</h4>
                    <h5>Fresher</h5>
                    <h4>Development Experience:</h4>
                    <h5>1 Year</h5>
                </div>
            </div>
        </div>
    )
}
