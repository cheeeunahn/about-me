import React from 'react'
import './Header.css';

const Header = () => {
    return (
        <header className = 'App-header'>
            <div className = 'Navigation-bar'>
                <a className = 'Navigation-item' href={"./#"}>
                    About
                </a>
                <a className = 'Navigation-item' href={"./#"}>
                    Works
                </a>
                <a className = 'Navigation-item' href={"./#"}>
                    Contact
                </a>
                <a href="/files/2021.12_CV.pdf" download="CheeEunAhn_CV">
                </a>
            </div>
            <div className = 'Name'>
                <h1 style ={{fontWeight: 700}}>Chee Eun Ahn</h1>
            </div>
        </header>
    )
}

export default Header
