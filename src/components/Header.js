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
                    Projects
                </a>
                <a className = 'Navigation-item' href={"./#"}>
                    Hobbies
                </a>
            </div>
            <div className = 'Name'>
                <h1 style ={{fontWeight: 700}}>Chee Eun Ahn</h1>
            </div>
        </header>
    )
}

export default Header
