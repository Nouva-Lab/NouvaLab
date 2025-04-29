// src/components/HomePage.jsx
import React from "react";
import "./HomePage.css";
import Hero from "./Hero";
import TopSubjects from "./TopSubjects";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <React.Fragment>
      <div className="home-page">
        <Hero />

        <section className="top-subjects">
          <h2>Top Subjects</h2>
          <TopSubjects />
        </section>

        <section className="testimonials">
          <h2>What Students Say</h2>
          <Testimonials />
        </section>

        <section className="about-us">
          <h2>About Us</h2>
          <p>NouvaLab provides easy access to learning through short, powerful videos.</p>        
        </section>
        <section className="discover-section">
          <div className="discover-section-grid">
            <div className="discover-item">
              <h3>Discover</h3>
              <p>
                Explore a vast range of subjects and find what piques your
                curiosity.
              </p>
              <Link to="/subjects" className="learn-more-btn">Learn More</Link>
            </div>

            <div className="learn-item">
        <h3>Learn</h3>
        <p>
          Dive deep into your chosen subjects with our short, engaging
          video lessons.
        </p>
        <Link to="/subjects" className="learn-more-btn">Learn More</Link>
      </div>
            <div className="grow-item">
        <h3>Grow</h3>
        <p>
          Expand your knowledge and skills at your own pace, anytime,
          anywhere.
        </p>
        <Link to="/subjects" className="learn-more-btn">Learn More</Link>
          </div>
      </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
