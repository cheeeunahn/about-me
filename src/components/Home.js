import React from 'react'
import Slideshow from './Slideshow.js'
import { ReactP5Wrapper } from "react-p5-wrapper"
import Sketch from '../sketches/Sketch.js'

const Home = () => {
    return(
        <div>
            <div className="Sketch">
                <ReactP5Wrapper sketch={Sketch} />
            </div>
            <Slideshow/>
            <div className="App-content">
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}/>
                {/*<img src={mainImage} alt='main_image' width={'35%'} height={'auto'}/>*/}
                <div className="Title">
                    Innovating the User Experience
                </div>
                <div className="Description">
                    <p>
                        An engineering-based industrial design HCI/UX specialist who wishes to provide innovative, novel, and enjoyable customer experiences, devise creative business/product strategies, and positively impact the world we live in by learning about people, different cultures, communities, and society in general.
                    </p>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}

export default Home