
import './App.css';
import Particles from './Particles';
import Header from './screens/header/Header';
import NavigationBar from './screens/navigationbar/NavigationBar';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Header/>
      <Particles></Particles>
    </div>
  );
}

export default App;
