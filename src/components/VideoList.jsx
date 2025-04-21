import React, { useEffect, useState } from 'react';
import { db } from "../firebase/firebase"; 

import { collection, getDocs } from 'firebase/firestore';
import './videoList.css'; // Adjust the path as needed
import PageWrapper from './PageWrapper'; // Adjust the path as needed

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const snapshot = await getDocs(collection(db, "videos"));
      const videosData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVideos(videosData);
    };

    fetchVideos();
  }, []);

  return (
    <PageWrapper>
    <div>
      <h2>All Videos</h2>
      {videos.map(video => (
        <div key={video.id}>
          <h4>{video.title}</h4>
          <video src={video.videoURL} controls width="400" />
        </div>
      ))}
    </div>
    </PageWrapper>
  );
};

export default VideoList;


