import React from 'react';
import './aboutMe.css';
import profile from '../../images/profile.jpg' 

function AboutMe() {
  return (
    <div className='about_container' id='about-me'>
      <div>
        <img src={profile} alt="profile icon" />
      </div>
      <div className='about_text'>
          <h1>ABOUT ME</h1>
          <p>Im a lifestyle photographer based in Sweden. Most of the time I’m creating around my adventures. There is something with nature and I’ts simplicity that keeps me moving. Moving to save as we go, and that’s what I love to do for a living. Capture, save and share. Most of everything since a while is saved on my social media: </p>
      </div>
    </div>
  )
}

export default AboutMe
