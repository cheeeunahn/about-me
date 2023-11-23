import './App.css';
import Header from './components/NavBar.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import Works from './components/Works.js'
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'

// To insert icons, please look here https://react-icons.github.io/react-icons

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route relative path="/about-me" exact element={<Home/>}/>
        <Route relative path="/works" exact element={<Works/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
