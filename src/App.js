import './App.css';
import { ReactP5Wrapper } from "react-p5-wrapper"
import Sketch from './sketches/Sketch.js'
import Header from './components/NavBar.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import About from './components/About.js'
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'

// To insert icons, please look here https://react-icons.github.io/react-icons

const App = () => {
  return (
    <div className="App">
      <div className="Sketch">
        <ReactP5Wrapper sketch={Sketch} />
      </div>
      <Header />
      <Routes>
        <Route relative path="/about-me" exact element={<Home/>}/>
        <Route relative path="/about" exact element={<About/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
