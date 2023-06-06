import { useState, useEffect, useCallback } from 'react';

const useScore = (answers) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    let newScore = Object.values(answers);
    console.log(newScore);
    let newNewScore = newScore.filter((el) => el === true).length;
    setScore(newNewScore);
    console.log(newNewScore);
  }, [answers]);

  return [score];
};

export default useScore;
