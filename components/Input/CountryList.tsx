import { useMemo } from 'react';

const CountryList = ({ searchValue, handleSelectValue, answers }) => {
  const countries = useMemo(() => Object.keys(answers), [answers]);

  return (
    <ul>
      {countries
        .filter(
          (country, idx) =>
            country[0] === searchValue[0] &&
            country.includes(searchValue),
        )
        .map((countrySearch, idx) => (
          <li key={idx} className="text-white cursor">
            <input
              id={countrySearch}
              type="radio"
              value={countrySearch}
              checked={searchValue === countrySearch}
              onChange={(event) => handleSelectValue(event)}
              className="mr-3"
            />
            <label htmlFor={countrySearch} className="cursor-pointer">
              {countrySearch}
            </label>
          </li>
        ))}
    </ul>
  );
};

export default CountryList;
