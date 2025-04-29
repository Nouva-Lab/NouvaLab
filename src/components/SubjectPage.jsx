/** @jsx createElement */

import React, { useEffect, useState } from 'react'; // Import React at the beginning
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import VideoPlayer from './VideoPlayer';
import './SubjectPage.css';
import PageWrapper from './PageWrapper';

function SubjectPage() {
  const { subjectName } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const videosCollection = collection(db, 'videos');
        const q = query(videosCollection, where('subject', '==', subjectName));
        const querySnapshot = await getDocs(q);
        const videosData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVideos(videosData);
      } catch {
        setError('Error fetching videos. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [subjectName]);

  return (
    <PageWrapper>
      <div className="subject-page">
        <h2>{subjectName} Videos</h2>
        {loading && <p>Loading videos...</p>}
        {error && <p className="error">{error}</p>}
        <div className="videos-grid">
          {videos.map(video => (
            <div key={video.id} className="video-card">
              <VideoPlayer video={video} />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

export default SubjectPage;