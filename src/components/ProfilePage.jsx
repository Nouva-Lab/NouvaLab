import React from 'react';
import "./ProfilePage.css";
import PageWrapper from "./PageWrapper";

function ProfilePage() {
  const user = {
    name: "Sipho M.",
    email: "sipho@example.com",
    profilePic: "https://randomuser.me/api/portraits/men/44.jpg",
    savedVideos: [
      {
        title: "Introduction to Algebra",
        subject: "Mathematics",
        thumbnail:
          "https://img.youtube.com/vi/5v5N7tAs1z8/hqdefault.jpg",
      },
      {
        title: "Photosynthesis Explained",
        subject: "Science",
        thumbnail:
          "https://img.youtube.com/vi/eGEdqZfFfv8/hqdefault.jpg",
      },
    ],
  };

  return (
    <PageWrapper> 
    <div className="profile-page">
      <div className="profile-header">
        <img src={user.profilePic} alt="Profile" />
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="saved-videos">
        <h3>Saved Videos</h3>
        <div className="saved-grid">
          {user.savedVideos.map((video, index) => (
            <div key={index} className="saved-card">
              <img src={video.thumbnail} alt={video.title} />
              <div className="saved-details">
                <h4>{video.title}</h4>
                <p>{video.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}

export default ProfilePage;
