import { countries } from '../data/countries';

const CountryList = ({ searchValue, handleSelectValue }) => {
  return (
    <ul>
      {countries
        .filter(
          (country, idx) =>
            country[0].toLowerCase() ===
              searchValue[0]?.toLowerCase() &&
            country.toLowerCase().includes(searchValue.toLowerCase()),
        )
        .map((countrySearch, idx) => (
          <li key={idx} className="text-white">
            <input
              type="radio"
              value={countrySearch}
              checked={searchValue === countrySearch}
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
