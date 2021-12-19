import React from 'react'
import './Header.css';

const Header = () => {

    function displayMsg() {
        alert('This section is currently under construction! Coming soon... :)');
    }

    return (
        <header className = 'App-header'>
            <div className = 'Navigation-bar'>
                <a className = 'Navigation-item' href={"./#"} onClick={displayMsg}>
                    About
                </a>
                <a className = 'Navigation-item' href={"./#"} onClick={displayMsg}>
                    Works
                </a>
                <a className = 'Navigation-item' href={"./#"} onClick={displayMsg}>
                    Contact
                </a>
                <a className = 'Navigation-item' href={"./files/2021.12_CV.pdf"} download={"CheeEunAhn_CV.pdf"}>
                    Download CV
                </a>
            </div>
            <div className = 'Name'>
                <h1 style ={{fontWeight: 700}}>Chee Eun Ahn</h1>
            </div>
        </header>
    )
}

export default Header
