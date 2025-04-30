/** @jsx createElement */
import React, { createElement } from 'react';

import { Link } from 'react-router-dom';
function SubjectCard({ name, path, description }) {
  return (
    <div className="subject-card">
      <Link to={`/subject/${name}`} className="subject-card-link">
      
        <h3 className="subject-card-title">{name}</h3>
        <p className="subject-card-desc">{description}</p>
      </Link>
    </div>
  );
}

export default SubjectCard;