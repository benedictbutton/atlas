import { useState, useEffect, useRef } from 'react';
import { Answers } from '../components/Countries';

const useScore = (answers: Answers) => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    let answerValues = Object.values(answers);
    let currentCorrect = answerValues.filter(
      (el) => el === true,
    ).length;
    let id;
    if (currentCorrect < correct) {
      id = setTimeout(() => setCorrect(correct - 1), 20);
    } else setCorrect(currentCorrect);

    let currentIncorrect = answerValues.filter(
      (el) => el === false,
    ).length;
    if (currentIncorrect < incorrect) {
      id = setTimeout(() => setIncorrect(incorrect - 1), 20);
    } else setIncorrect(currentIncorrect);

    return () => clearTimeout(id);
  }, [answers, correct, incorrect]);

  return [correct, incorrect];
};

export default useScore;
