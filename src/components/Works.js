import React from 'react'
import './Works.css'
import YoutubeEmbed from './YoutubeEmbed'

const Works = () =>{
    return(
        <div className = 'video-container'>
            <div className='video-list'>
                <div className = 'video-block'>
                    <h1>
                        MeowPlayLive
                    </h1>
                    <YoutubeEmbed embedId ='9mu4AzfrvoY?si=njdgIIHbUKUlmf4Z'/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='video-block'>
                    <h1>
                        Interactive Gesture Speaker
                    </h1>
                    <YoutubeEmbed embedId='tNTaWe5wceg?si=3fVSkvNZvmn9HilM'/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies porta convallis. Vestibulum euismod, ligula nec ullamcorper congue, metus neque vestibulum lectus, at mattis neque ante in eros. Nulla varius urna ut ante volutpat, quis tempus dui rutrum. Fusce lobortis mauris eu velit sollicitudin, in vestibulum leo facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse ut molestie ipsum. Nulla fringilla convallis diam, pellentesque tristique arcu finibus quis. Integer vel tellus molestie, blandit orci tempor, dictum dolor. Vestibulum accumsan augue quis risus scelerisque maximus. Sed fringilla volutpat tortor eget vestibulum. Ut nisl nulla, tincidunt et porta facilisis, tempus vel felis.
                    </p>
                </div>
                <div className = 'video-block'>
                <h1>
                    VR Game
                </h1>
                <YoutubeEmbed embedId='ZqZ275pDsW0?si=crjLTBKi-Fk4KCbb'/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
                <div className='video-block'>
                <h1>
                    Disk-it: Customizable Tangible Online Music Playlist Interface for Hobbyists
                </h1>
                <YoutubeEmbed embedId='mFkAa-jbNoU?si=UDKdy3wuea29UdDu'/>
                </div>
                <div className='video-block'>
                <h1>
                    Magnetic Rain
                </h1>
                <YoutubeEmbed embedId='l5fD1jyS1y0?si=NhKVpls6iTWrOYXT'/>
                </div>
            </div>
        </div>
    )
}

export default Works