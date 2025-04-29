import React from 'react';
import { Link } from 'react-router-dom';
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
    <div className="subjects-grid">
      {subjects.map((subject, index) => (
        <div key={index} className="subject-card">
          <h3>{subject}</h3>
          <p>Explore lessons and videos on {subject}.</p>
          <Link to={`/subjects/${subject.toLowerCase()}`} className="subject-btn">Start Learning</Link>
        </div>
      ))}
    </div>
  );
}

export default TopSubjects;
