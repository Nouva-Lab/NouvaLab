// src/components/HomePage.jsx
import React from "react";
import PageWrapper from "./PageWrapper";
import './HomePage.css';


function HomePage() {
  return (
    <PageWrapper>
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to EduTube</h1>
        <p>Your hub for educational videos, quizzes, and progress tracking.</p>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>EduTube provides easy access to learning through short, powerful videos.</p>
      </section>
    </div>
    </PageWrapper>
  );
}

export default HomePage;
