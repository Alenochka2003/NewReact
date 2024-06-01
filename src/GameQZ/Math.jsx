import React from 'react';
import Answer from './Answer';
import MathQuiz from './MathQuiz';
import './Style.css';


function MathComponent() { 
  return (
    <div className="Math">
      <Answer />
      <MathQuiz />
    </div>
  );
}

export default MathComponent;