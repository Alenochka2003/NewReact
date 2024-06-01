import React, { useState } from 'react';

const Answer = ({ a, b, updatePoints }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = a + b;
    updatePoints(parseInt(userAnswer) === correctAnswer);
    setUserAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Answer;