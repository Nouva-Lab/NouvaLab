import React from 'react';
import './TeacherCard.css';

const TeacherCard = ({ name, subject }) => {
  return (
    <div className="teacher-card">
      <h3>{name}</h3>
      <p>{subject}</p>
    </div>
  );
};

export default TeacherCard;