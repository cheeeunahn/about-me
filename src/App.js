import logo from './profiledrawing-512px.png';
import './App.css';
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from './Sketch.js'


function App() {
  return (
    <div className="App">
      <div className="App-header">
        <p>
          Innovating the User Experience
        </p>
        <img className= "App-logo" src={logo} alt="Logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      <div className="Sketch">
        <ReactP5Wrapper sketch={sketch} />
      </div>
    </div>
  );
}

export default App;
