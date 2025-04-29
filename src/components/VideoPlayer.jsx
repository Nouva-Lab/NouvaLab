import React from 'react';
import "./VideoPlayer.css";

function VideoPlayer() {
  const videoData = {
    title: "Introduction to Algebra",
    subject: "Mathematics",
    videoUrl: "https://www.youtube.com/embed/5v5N7tAs1z8",
    description:
      "This video covers the basics of algebra. Perfect for students just getting started!",
    comments: [
      { user: "Zanele", text: "This video made algebra fun!" },
      { user: "Sizwe", text: "Thank you! Very helpful for my test." },
      { user: "Amina", text: "Easy to understand and well explained." },
    ],
  };

  return (
    <div className="video-player-page">
      <div className="video-frame">
        <iframe
          src={videoData.videoUrl}
          title={videoData.title}
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-details">
        <h2>{videoData.title}</h2>
        <p className="subject-tag">{videoData.subject}</p>
        <p className="video-description">{videoData.description}</p>

        <div className="comments-section">
          <h3>Comments</h3>
          {videoData.comments.map((comment, index) => (
            <div key={index} className="comment">
              <strong>{comment.user}</strong>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
