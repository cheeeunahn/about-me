import logo from './profiledrawing-512px.png';
import './App.css';
import { ReactP5Wrapper } from "react-p5-wrapper";
import Sketch from './sketches/Sketch.js'
import Header from './components/Header.js'

// To insert icons, please look here https://react-icons.github.io/react-icons

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App-content">
        {/* <img className= "App-logo" src={logo} alt="Logo" /> */}
        <p>
          Innovating the User Experience
        </p>
      </div>
      <div className="Sketch">
        <ReactP5Wrapper sketch={Sketch} />
      </div>
    </div>
  );
}

export default App;
