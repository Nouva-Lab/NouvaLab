import React from "react";
import "./VideoGallery.css";

function VideoGallery() {
  const videos = [
    {
      id: 1,
      title: "Introduction to Algebra",
      subject: "Mathematics",
      thumbnail:
        "https://img.youtube.com/vi/5v5N7tAs1z8/hqdefault.jpg",
    },
    {
      id: 2,
      title: "Photosynthesis Explained",
      subject: "Science",
      thumbnail:
        "https://img.youtube.com/vi/eGEdqZfFfv8/hqdefault.jpg",
    },
    {
      id: 3,
      title: "World War II Overview",
      subject: "History",
      thumbnail:
        "https://img.youtube.com/vi/HYAMXR3f466/hqdefault.jpg",
    },
    {
      id: 4,
      title: "Understanding Plate Tectonics",
      subject: "Geography",
      thumbnail:
        "https://img.youtube.com/vi/xL2zqRZYv4k/hqdefault.jpg",
    },
  ];

  return (
    <section className="video-gallery">
      <h2>All Videos</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <img src={video.thumbnail} alt={video.title} />
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default VideoGallery;
