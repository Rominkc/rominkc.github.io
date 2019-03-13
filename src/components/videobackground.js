import React from 'react';
import waterfallvideo from '../assets/WaterfallVid.mp4';
import './Home.css';
const VideoBackGround = (props) => {
    return(
    <video autoPlay muted loop id="video" src={waterfallvideo}>
    " Your browser does not support HTML5 video."
    </video>);
}
export default VideoBackGround;