import {
  useState,
  useCallback,
  SetStateAction,
  Dispatch,
} from 'react';

const useShowAllCountries = (
  answers: AnswersObject,
  setAnswers: Dispatch<SetStateAction<AnswersObject>>,
) => {
  const [showAll, setShowAll] = useState(true);
  const [currentGame, setCurrentGame] = useState({});

  const showAllCountries = useCallback(() => {
    setCurrentGame(answers);
    const correctAnswers: AnswersObject = {};
    Object.keys(answers).map(
      (country) => (correctAnswers[country] = true),
    );
    setAnswers({ ...answers, ...correctAnswers });
    setShowAll(!showAll);
  }, [answers, setAnswers, showAll]);

  const hideAllCountries = useCallback(() => {
    setAnswers({ ...answers, ...currentGame });
    setShowAll(!showAll);
  }, [answers, currentGame, setAnswers, showAll]);

  return { showAll, showAllCountries, hideAllCountries };
};

export default useShowAllCountries;
