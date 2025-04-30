import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import './VideoGallery.css';
import { storage } from '../firebase/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';


const VideoGallery = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const videosRef = ref(storage, 'videos');
      try {
        const res = await listAll(videosRef);
        const urls = await Promise.all(res.items.map(item => getDownloadURL(item)));
        setVideos(urls);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
      <div className="video-gallery">
        <h1 className="video-title">Video Gallery</h1>
        {videos.map((url, index) => (
          <VideoPlayer key={index} videoUrl={url} />
        ))}
      </div>
  );
};

export default VideoGallery;
