import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

const Header = () => {

    function displayMsg() {
        alert('This section is currently under construction! Coming soon... :)');
    }

    return (
        <header className = 'App-header'>
            <div className = 'Navigation-bar'>
                <Link to ="/about-me" className = 'Navigation-item'>
                    Home
                </Link>
                <Link to ="/works" className = 'Navigation-item'>
                    Works
                </Link>
                <a className = 'Navigation-item' href={"./files/2021.12_CV.pdf"} download={"CheeEunAhn_CV.pdf"}>
                    Download CV
                </a>
            </div>
            <div className = 'Navigation-item, Name' style = {{fontWeight: 700, textDecoration: 'none'}}>
                <h1>Chee Eun Ahn</h1>
            </div>
        </header>
    )
}

export default Header
