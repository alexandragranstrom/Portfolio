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
          <p>I am an outgoing person who likes to 
be challenged and to learn new 
things. I have an easy time adapting 
to different group dynamics and 
appreciate to work both in teams and 
individually, although I prefer to 
collaborate with others. I am a 
solution-oriented person who likes to 
get things done fast and with a good 
result. Former colleagues would 
describe me as energetic, positive, 
competent, and professional as I have 
a strong work ethic and always strive 
to do my best to deliver value in my 
work.
</p>
      </div>
    </div>
  )
}

export default AboutMe
