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
          <li key={idx} className="text-white">
            <input
              type="radio"
              value={countrySearch.toLowerCase()}
              checked={
                searchValue.toLowerCase() ===
                countrySearch.toLowerCase()
              }
              onChange={(event) => handleSelectValue(event)}
              className="mr-3"
            />
            {countrySearch}
          </li>
        ))}
    </ul>
  );
};

export default CountryList;
