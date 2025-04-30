import React from 'react';
import './SubjectTile.css';

const SubjectTile = ({ title }) => {
  return (
    <div className="subject-tile">
      <h3>{title}</h3>
    </div>
  );
};

export default SubjectTile;