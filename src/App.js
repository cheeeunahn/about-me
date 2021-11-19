import logo from './profiledrawing-512px.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

      </header>
    </div>
  );
}

export default App;
