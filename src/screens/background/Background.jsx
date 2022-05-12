import React from 'react';
import Pic from '../../images/backgroundImage/background.jpg'
import Image from 'react-bootstrap/Image'

function Background() {
const picture = Pic;
  return (
      <div className='backgroundImage_container'>
           <Image src={picture} style={{ width: '250vh', height: '100vh' }} />
      </div>

  )
}



export default Background
