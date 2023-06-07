import { useState, useEffect, useCallback } from 'react';

const useScore = (answers) => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    let currentCorrect = Object.values(answers).filter(
      (el) => el === true,
    ).length;
    setCorrect(currentCorrect);
    let currentIncorrect = Object.values(answers).filter(
      (el) => el === false,
    ).length;
    setIncorrect(currentIncorrect);
  }, [answers]);

  return [correct, incorrect];
};

export default useScore;
