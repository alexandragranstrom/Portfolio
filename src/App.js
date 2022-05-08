
import './App.css';
import Particles from './Particles';
import Header from './screens/header/Header';
import NavigationBar from './screens/navigationbar/NavigationBar';
import AboutMe from './screens/aboutMe/AboutMe';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Header/>
      <Particles></Particles>
      <AboutMe/>
    </div>
  );
}

export default App;
