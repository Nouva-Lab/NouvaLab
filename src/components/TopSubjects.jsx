import React from "react";
import "./TopSubjects.css";

function TopSubjects() {
  const subjects = [
    "Mathematics",
    "Science",
    "History",
    "Geography",
    "English",
    "Computer Science",
    "Art",
    "Music",
  ];

  return (
    <section className="top-subjects">
      <h2>Top Subjects</h2>
      <div className="subjects-grid">
        {subjects.map((subject, index) => (
          <div key={index} className="subject-card">
            <h3>{subject}</h3>
            <p>Explore lessons and videos on {subject}.</p>
            <a href="#" className="subject-btn">Start Learning</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopSubjects;
