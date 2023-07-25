import { useState, useEffect } from 'react';

const useScore = (answers: CountriesObject) => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    let answerValues = Object.values(answers);

    let currentCorrect = answerValues.filter(
      (el) => el === true,
    ).length;
    let id: string | number | NodeJS.Timeout | undefined;
    if (currentCorrect < correct) {
      id = setTimeout(() => setCorrect(correct - 1), 20);
    } else if (currentCorrect > correct) {
      id = setTimeout(() => setCorrect(correct + 1), 20);
    }

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
