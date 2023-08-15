import {
  useState,
  useCallback,
  SetStateAction,
  Dispatch,
} from 'react';

const useShowAllCountries = (
  answers: AnswersObject,
  setAnswers: Dispatch<SetStateAction<AnswersObject>>,
  cribData,
) => {
  const [showAll, setShowAll] = useState(true);
  const [currentGame, setCurrentGame] = useState({});

  const showAllCountries = useCallback(() => {
    setCurrentGame(answers);
    const correctAnswers: AnswersObject = {};
    Object.keys(answers).map(
      (key) => (correctAnswers[key] = cribData?.[key] || 1),
    );
    setAnswers({ ...answers, ...correctAnswers });
    setShowAll(!showAll);
  }, [cribData, answers, setAnswers, showAll]);

  const hideAllCountries = useCallback(() => {
    setAnswers({ ...answers, ...currentGame });
    setShowAll(!showAll);
  }, [answers, currentGame, setAnswers, showAll]);

  return { showAll, showAllCountries, hideAllCountries };
};

export default useShowAllCountries;
