import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './VideoList.css';
import PageWrapper from './PageWrapper';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';

const VideoList = () => { 
  const [selectedSubject, setSelectedSubject] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleVideoClick = (video) => {
    navigate(`/video/${video.id}`);
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'videos'));
        const fetchedVideos = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVideos(fetchedVideos);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching videos.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <PageWrapper><p>Loading videos...</p></PageWrapper>;
  }

  if (error) {
    return <PageWrapper><p>Error: {error}</p></PageWrapper>;
  }

  return (
    <PageWrapper>
      <div className="video-list-container">
        <h2>All Videos</h2>
        <div className="video-list">
          {videos.length === 0 ? (
            <div className="no-videos-message">
              <p>No videos available yet.</p>
            </div>
          ) : (
            videos.map((video) => (
              console.log(video.url),
              <div key={video.id} className="video-card">
                <div className="video-item" onClick={() => handleVideoClick(video)}>
                   <h4>{video.title}</h4>
                  <p>{video.description}</p>
                   <div className="video-player">
                     <video width="560" height="315" controls>
                       <source src={video.url} type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
                   </div>
                </div>
              </div>
            ))
          )}
          {videos.length === 0 && (
            <div className='video-card'>
                <div className="video-placeholder"></div>
            </div>
          )}
          </div>
      </div>
    </PageWrapper>
  );
};
export default VideoList;

