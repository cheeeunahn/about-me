import './App.css';
import { ReactP5Wrapper } from "react-p5-wrapper";
import Sketch from './sketches/Sketch.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import mainImage from './images/main_page2.jpg'

// To insert icons, please look here https://react-icons.github.io/react-icons

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="Sketch">
          <ReactP5Wrapper sketch={Sketch} />
      </div>
      <div className="App-content">
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <img src={mainImage} alt='main_image' width={'35%'} height={'auto'}/>
            <div className="Title">
              Innovating the User Experience
            </div>
            <div className="Description">
                <p>
                  Hi, I am a <b style={{color: '#89ecda'}}>UX RESEARCHER / UX DESIGNER / INTERACTION DESIGNER</b> currently residing in Seoul, South Korea. I am also interested in front-end web development and media art.
                </p>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
