import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ videoUrl }) => {
    return (
        <div className="video-player-container">
            <video className="video-player" controls>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
