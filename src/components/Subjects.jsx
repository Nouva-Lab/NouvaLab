/** @jsx createElement */

import React, {createElement} from 'react';
import { Link } from 'react-router-dom';

import PageWrapper from './PageWrapper';
import SubjectCard from './SubjectCard';
import './Subjects.css';

function Subjects() {
  const subjects = [
    { name: 'Mathematics', path: '/subjects/mathematics', description: 'Explore the world of numbers, patterns, and problem-solving.' },
    { name: 'Science', path: '/subjects/science', description: 'Discover the wonders of the natural world through experiments and exploration.' },
    { name: 'History', path: '/subjects/history', description: 'Travel through time and learn about the events that shaped our world.' },
    { name: 'Geography', path: '/subjects/geography', description: 'Understand the Earth\'s landscapes, cultures, and environments.' },
    { name: 'Literature', path: '/subjects/literature', description: 'Dive into the world of stories, poems, and plays, and discover the power of language.' },
  ];
  
  return (
    
      <PageWrapper>
        <div className="subjects-page">
          <h1>Subjects</h1>
          <div className='subject-list'>
            {subjects.map(subject => (
              <SubjectCard key={subject.name} name={subject.name} path={subject.path} description={subject.description} />
            ))}
          </div>
        </div>
      </PageWrapper>
    
  );
}
export default Subjects;