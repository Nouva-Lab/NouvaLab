import React from 'react';
import TeacherCard from './TeacherCard';
import './TeacherSection.css';

const TeacherSection = () => {
  const teachers = [
    { name: 'Teacher 1', subject: 'Mathematics' },
    { name: 'Teacher 2', subject: 'Geography' },
    { name: 'Teacher 3', subject: 'Science' },
    { name: 'Teacher 4', subject: 'Languages' },
    { name: 'Teacher 5', subject: 'Life Orientation' },
  ];

  return (
    <div className="teacher-section">
      <h2 className="teachers-title">Our Teachers</h2>
      <div className="teacher-cards-container">
        {teachers.map((teacher, index) => (
          <TeacherCard key={index} name={teacher.name} subject={teacher.subject} />
        ))}
      </div>
    </div>
  );
};

export default TeacherSection;