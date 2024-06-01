import React, { useState } from 'react';
import Answer from './Answer';


const MathQuiz = () => {
    const [a, setA] = useState(Math.floor(Math.random() * 10));
    const [b, setB] = useState(Math.floor(Math.random() * 10));
    const [score, setScore] = useState(0);
  
    const updatePoints = (correct) => {
      setScore(score + (correct ? 1 : -1));
      setA(Math.floor(Math.random() * 10));
      setB(Math.floor(Math.random() * 10));
    };
  
    return (
        <div className="quiz-container"> 
        <h1>Math Quiz</h1>
        <div className="quiz-content"> 
          <p>What is {a} + {b}?</p>
          <p>Current Score: {score}</p>
          <Answer a={a} b={b} updatePoints={updatePoints} />
        </div>
      </div>
    );
  };



export default MathQuiz;