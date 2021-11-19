import logo from './profiledrawing-512px.png';
import './App.css';
import { ReactP5Wrapper } from "react-p5-wrapper";
import Sketch from './sketches/Sketch.js'
import Header from './components/Header.js'


const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <p>
          Innovating the User Experience
        </p>
        <img className= "App-logo" src={logo} alt="Logo" />
      </div>
      <div className="Sketch">
        <ReactP5Wrapper sketch={Sketch} />
      </div>
    </div>
  );
}

export default App;
