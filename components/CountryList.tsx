import { countries } from '../data/countries';

const CountryList = ({ searchValue }) => {
  return (
    <ul>
      {countries
        .filter(
          (country, idx) =>
            country[0] === searchValue[0]?.toLowerCase() &&
            country.includes(searchValue.toLowerCase()),
        )
        .map((countrySearch, idx) => (
          <li key={idx} className="text-white">
            {countrySearch}
          </li>
        ))}
    </ul>
  );
};

export default CountryList;
