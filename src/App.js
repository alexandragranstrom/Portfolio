
import './App.css';
import Particles from './Particles';
import Header from './screens/header/Header';
import NavigationBar from './screens/navigationbar/NavigationBar';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import Portfolio from './screens/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Header/>
      <Particles/>
      <AboutMe/>
      <Technologies/>
      <Portfolio/>
    </div>
  );
}

export default App;
