import Typed from 'react-typed';
import './Header.css'

function Header() {
  return (
    <div className="main-info">
      <h1>Who am I?</h1>
      <Typed 
        strings={[
          " ", 
          "An outgoing Software Engineer", 
          "Also known as a", 
          "Happy Front-end developer", 
          "Communicative Back-end developer", 
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