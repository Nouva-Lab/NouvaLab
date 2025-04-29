import React, { useEffect, useState } from 'react';
import { db } from "../firebase/firebase";
import { collection, getDocs } from 'firebase/firestore';
import './VideoList.css'; 
import PageWrapper from './PageWrapper';
import VideoPlayer from './VideoPlayer';

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "videos"));
        const videosData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setVideos(videosData);
        
        
      } catch {
        setError("Error fetching videos. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  return (
    <PageWrapper>
      <div className="video-list-container">
      <h2>All Videos</h2>
        {loading && <p>Loading videos...</p>}
        {error && <p className="error">{error}</p>}
        {videos.map(video => (
        <div key={video.id} className="video-item">
          <h4>{video.title}</h4>
          <video src={video.url} controls width="400" />
        </div>
      ))}
    </div>
    </PageWrapper>
  );
};

export default VideoList;

