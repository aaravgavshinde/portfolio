import React from 'react'
import './Extra.css'

export default function Extra() {
  return (
    <div className='main-extra-div'>
      {/* <img className='img9' src="./Images/bg2.jpg" alt="" /> */}
      <div className='extra-info'>
        <div className='exbox'>
          <h4>Volunteering</h4>
          <h3><span>2022 - Current:</span> Mentoring College Juniors in problems related to Career, Study, Campus, and even Personal Life. </h3>
        </div>
        <div className="exbox">
          <h4>Hobbies</h4>
          <h3>Photography, Videography, Photo editing, Video editing - <a href='https://www.instagram.com/aaravgavshinde/' target='_blank' rel='noreferrer'>@aaravgavshinde</a></h3>
          <h3>Drawing</h3>
        </div>
      </div>
    </div>
  )
}
