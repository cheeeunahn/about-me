import React from "react";
import PropTypes from "prop-types";
import IframeResizer from 'iframe-resizer-react'

//https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2



function YoutubeEmbed ({embedId }) {
  return (<div className="video-responsive">
    <IframeResizer
      style={{width: '1px', minWidth: '65%', height:'50vmin'}}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>);
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;