import { useState, useEffect } from 'react';

const useScore = (answers) => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    let answerValues = Object.values(answers);

    let currentCorrect = answerValues.filter(
      (el) => el === true,
    ).length;
    setCorrect(currentCorrect);
    let currentIncorrect = answerValues.filter(
      (el) => el === false,
    ).length;
    setIncorrect(currentIncorrect);
  }, [answers]);

  return [correct, incorrect];
};

export default useScore;
