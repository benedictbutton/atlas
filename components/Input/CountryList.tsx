import { useMemo } from 'react';

const CountryList = ({ searchValue, handleSelectValue, answers }) => {
  const countries = useMemo(() => Object.keys(answers), [answers]);
  const lowerCaseSearchValue = searchValue.toLowerCase();

  return (
    <ul>
      {countries
        .filter(
          (country, idx) =>
            country[0]?.toLowerCase() === lowerCaseSearchValue[0] &&
            country.toLowerCase().includes(lowerCaseSearchValue),
        )
        .map((countrySearch, idx) => (
          <li key={idx} className="text-white cursor">
            <input
              id={countrySearch}
              type="radio"
              value={countrySearch.toLowerCase()}
              checked={
                searchValue.toLowerCase() ===
                countrySearch.toLowerCase()
              }
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
