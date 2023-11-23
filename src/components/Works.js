import React from 'react'
import './Works.css'
import YoutubeEmbed from './YoutubeEmbed'

const Works = () =>{
    return(
        <div className='video-list'>
            <div className = 'video-block'>
                <h1>
                    MeowPlayLive
                </h1>
                <YoutubeEmbed embedId ='9mu4AzfrvoY?si=njdgIIHbUKUlmf4Z'/>
                <p>
                    This is some kind of text.
                </p>
            </div>
            <div className='video-block'>
                <h1>
                    Interactive Gesture Speaker
                </h1>
                <YoutubeEmbed embedId='tNTaWe5wceg?si=3fVSkvNZvmn9HilM'/>
            </div>
            <div className = 'video-block'>
            <h1>
                VR Game
            </h1>
            <YoutubeEmbed embedId='ZqZ275pDsW0?si=crjLTBKi-Fk4KCbb'/>
            </div>
            <h1>
                Disk-it: Customizable Tangible Online Music Playlist Interface for Hobbyists
            </h1>
            <YoutubeEmbed embedId='mFkAa-jbNoU?si=UDKdy3wuea29UdDu'/>
            <h1>
                Magnetic Rain
            </h1>
            <YoutubeEmbed embedId='l5fD1jyS1y0?si=NhKVpls6iTWrOYXT'/>
        </div>
    )
}

export default Works