import React from 'react';
import waterfallvideo from '../assets/NycTraffic2.mp4';
import './Home.css';
// Make sure to delete the vids you aren't using
const VideoBackGround = (props) => {
    return(
    <>
    {/* Div to make the background video less noisy with a transparent overlay */}
    <div id='videoOverlay'>
    </div>
    <video autoPlay muted loop id="video" src={waterfallvideo}>
    " Your browser does not support HTML5 video."
    </video>
  
    </>);
}
export default VideoBackGround;