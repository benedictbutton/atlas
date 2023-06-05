import { useState, useCallback } from 'react';

const useForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const [answers, setAnswers] = useCountries();
  const handleSearchValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchValue(() => event.target.value);
    },
    [setSearchValue],
  );

  const handleSelectValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchValue(() => event.target.value);
    },
    [setSearchValue],
  );

  const handleSubmit = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      if (currentCountry === searchValue)
        setAnswers({ ...answers, searchValue: true });
      else setAnswers({ ...answers, searchValue: true });
    },
    [currentCountry, searchValue, answers, setAnswers],
  );
  return {
    searchValue,
    handleSearchValue,
    handleSelectValue,
    handleSubmit,
  };
};

export default useForm;
