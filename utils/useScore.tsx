import { useState, useEffect, useMemo } from 'react';

const useScore = (answers: AnswersObject) => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const [currentCorrect, currentIncorrect] = useMemo(
    () =>
      Object.values(answers).reduce(
        (acc, cV) => {
          if (cV > 0 ?? 0) acc[0] += cV;
          else if (cV < 0 ?? 0) acc[1] += 1;
          return acc;
        },
        [0, 0],
      ),
    [answers],
  );

  useEffect(() => {
    let id: string | number | NodeJS.Timeout | undefined;

    if (currentCorrect < correct) {
      id = setTimeout(() => setCorrect(correct - 1), 20);
    } else if (currentCorrect > correct) {
      id = setTimeout(() => setCorrect(correct + 1), 20);
    }

    if (currentIncorrect < incorrect) {
      id = setTimeout(() => setIncorrect(incorrect - 1), 20);
    } else setIncorrect(currentIncorrect);

    return () => clearTimeout(id);
  }, [answers, correct, incorrect, currentCorrect, currentIncorrect]);

  return [correct, incorrect];
};

export default useScore;
