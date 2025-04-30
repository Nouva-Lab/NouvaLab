import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import SubjectsSection from './components/SubjectsSection';
import TeacherSection from './components/TeacherSection';

import ContactPage from "./components/ContactPage";
import VideoGallery from "./components/VideoGallery";
import Login from "./components/Login";
import ProfilePage from "./components/ProfilePage";
import UploadVideo from './components/UploadVideo';
import SubjectPage from "./components/SubjectPage";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import Subjects from "./components/Subjects";
import QuizSection from "./components/QuizSection";
import PageWrapper from "./components/PageWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./components/ProfilePage.css"; // Assuming you have a CSS file for profile page styles
import "./components/HomePage.css"; // Assuming you have a CSS file for home page styles
import "./components/Subjects.css";
import "./components/VideoList.css"; // Assuming you have a CSS file for video list styles
import "./components/QuizSection.css"; // Assuming you have a CSS file for quiz section styles
import "./components/UploadVideo.css"; // Assuming you have a CSS file for upload video styles
import './components/Login.css'; // Assuming you have a CSS file for login styles
import "./components/ContactPage.css"; // Assuming you have a CSS file for contact page styles
import "./components/AboutPage.css"; // Assuming you have a CSS file for about page styles
import './App.css';
import './components/Footer.css';
import Register from './components/Register';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  
  useEffect(() => {
    const errorHandler = (error) => {
      setHasError(true);
      console.error("ErrorBoundary caught an error:", error);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return children;
}

function App() {
  return (
    <ErrorBoundary>

      <PageWrapper>
        <div className="app">
          <Header />
          <Welcome />
          <SubjectsSection />
          <TeacherSection />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/videos" element={<VideoGallery />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/subjects/:id" element={<SubjectPage />} />
              <Route path="/quiz" element={<QuizSection />} />
              <Route path="/upload" element={<UploadVideo />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </PageWrapper>
    </ErrorBoundary>
  );
}

export default App;
