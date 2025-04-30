// src/components/HomePage.jsx
import React, { createElement } from 'react';

import PageWrapper from './PageWrapper';
import SubjectCard from './SubjectCard';
import './HomePage.css';
import { Link } from "react-router-dom";
import VideoGallery from './VideoGallery';

const HomePage = () => {
  

  return (
    <PageWrapper>
        <div className='home-page'>
        <h1>Welcome to NouvaLab!</h1>
        <p>Discover a wide range of educational videos and courses.</p>
        <div className='gallery-container'>
            <VideoGallery />
        </div>
        </div>

    </PageWrapper>
  );
};

export default HomePage;
