import React from 'react'

import mainImage from '../images/main_page2.jpg'

const Home = () => {
    return(
        <div className="App-content">
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}/>
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
    )
}

export default Home