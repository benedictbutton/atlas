import { useState, useEffect } from 'react';

const useScore = (answers: AnswersObject) => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    const answerValues = Object.values(answers);

    const currentCorrect = answerValues.reduce<number>((acc, cV) => {
      if (cV > 0 ?? 0) acc += cV;
      return acc;
    }, 0 as number);
    let id: string | number | NodeJS.Timeout | undefined;
    if (currentCorrect < correct) {
      id = setTimeout(() => setCorrect(correct - 1), 20);
    } else if (currentCorrect > correct) {
      id = setTimeout(() => setCorrect(correct + 1), 20);
    }

    const currentIncorrect = answerValues.reduce<number>(
      (acc, cV) => {
        if (cV < 0 ?? 0) acc += 1;
        return acc;
      },
      0,
    );
    if (currentIncorrect < incorrect) {
      id = setTimeout(() => setIncorrect(incorrect - 1), 20);
    } else setIncorrect(currentIncorrect);

    return () => clearTimeout(id);
  }, [answers, correct, incorrect]);

  return [correct, incorrect];
};

export default useScore;
