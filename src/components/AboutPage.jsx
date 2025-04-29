import React from 'react';
import PageWrapper from "./PageWrapper";
import "./AboutPage.css";

function AboutPage() {
  return (
    <PageWrapper>
    <div className="about-page">
      <h1>About NouvaLab</h1>
      <p className="intro">
        NouvaLab is a student-first educational platform built to deliver
        high-quality, short-form academic videos to learners across the globe.
        We’re committed to making learning fun, accessible, and engaging —
        anywhere, anytime.
      </p>

      <div className="mission-section">
        <h2>🎯 Our Mission</h2>
        <p>
          To empower students with free, well-structured, and easy-to-understand
          video lessons that complement school curriculums and prepare learners
          for real academic success.
        </p>
      </div>

      <div className="vision-section">
        <h2>🌍 Our Vision</h2>
        <p>
          A world where quality education is no longer bound by geography or
          economic background — where every learner has a fair chance to excel.
        </p>
      </div>

      <div className="values-section">
        <h2>💡 Our Values</h2>
        <ul>
          <li>Inclusivity</li>
          <li>Creativity</li>
          <li>Quality Education</li>
          <li>Student Empowerment</li>
          <li>Continuous Innovation</li>
        </ul>
      </div>
    </div>
    </PageWrapper>
  );
}

export default AboutPage;
