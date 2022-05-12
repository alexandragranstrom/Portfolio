
import './App.css';
//import Particles from './Particles';
import Header from './screens/header/Header';
import NavigationBar from './screens/navigationbar/NavigationBar';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import Portfolio from './screens/portfolio/Portfolio';
import ContactMe from './screens/contactMe/ContactMe';
import Background from './screens/background/Background';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Header/>
      <Background/>     
      <AboutMe/>
      <Technologies/>
      <Portfolio/>
      <ContactMe/>
    </div>
  );
}

export default App;
