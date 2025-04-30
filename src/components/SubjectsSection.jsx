import React from 'react';
import SubjectTile from './SubjectTile';
import './SubjectsSection.css';

const SubjectsSection = () => {
  const subjectsList = [
    'Mathematics',
    'Geography',
    'Life Orientation',
    'Languages',
    'Science',
  ];

  return (
    <div className="subjects-section">
      <h2 className="subjects-title">Subjects</h2>
      <div className="subjects-grid">
        {subjectsList.map((subject, index) => (
          <SubjectTile key={index} title={subject} />
        ))}
      </div>
    </div>
  );
};

export default SubjectsSection;