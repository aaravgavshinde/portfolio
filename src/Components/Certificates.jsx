import React from 'react'
import './Certificates.css'

export default function Certificates() {
    return (
        <div className='main-certificate-div'>
            {/* <img className='img7' src="./Images/bg2.jpg" alt="" /> */}
            <div className='certificates-div'>
                <div className='dspl certification'>
                    <div>
                        <h4>From <a href="https://www.digitalsavers.in/" target='_blank' rel='noreferrer'> Digital Savers Pvt. Ltd. </a></h4>
                        <a href="https://drive.google.com/file/d/13LoaW7fxg9lHltlcYWEApeIUz0PWa8ne/view?usp=drive_link" target='_blank' rel='noreferrer'>MERN Stack Development Certificates: <i className="fa fa-external-link-square" aria-hidden="true" /></a>
                    </div>
                    <div>
                        <a href="https://drive.google.com/file/d/1qxenorIYg9tJmTJ8Kw0jLp3kEbnAgJC0/view?usp=drive_link" target='_blank' rel='noreferrer'>MERN "Letter of Completion": <i className="fa fa-external-link-square" aria-hidden="true" /></a>
                    </div>
                </div>

                <div className='nxtwave certification'>
                    <h4>From <a href="https://www.ccbp.in/" target='_blank' rel='noreferrer'> NxtWave </a></h4>
                    <a href="https://drive.google.com/file/d/1sNDIn9z8ylNwDnusXHy46gOjI4Fud_pD/view?usp=drive_link" target='_blank' rel='noreferrer'>Generative AI Workshop Certificate: <i className="fa fa-external-link-square" aria-hidden="true" /></a>
                </div>
            </div>
        </div>
    )
}
