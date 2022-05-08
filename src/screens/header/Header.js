import Typed from 'react-typed';
import './Header.css'

function Header() {
  return (
    <div className="main-info">
      <h1>Who am I?</h1>
      <Typed 
        strings={[
          " ", 
          "A Software Engineer", 
          "Also known as an", 
          "Front-end developer", 
          "Back-end developer", 
          "Full stack developer", 
          "Or!", 
          '"a coder"', 
          " ", 
          " "]}
          typeSpeed={40}
          backSpeed={50}
          loop
      />
    </div>
  )
}

export default Header