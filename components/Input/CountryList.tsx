import { useMemo } from 'react';

const CountryList = ({ searchValue, handleSelectValue, answers }) => {
  const countries = useMemo(() => Object.keys(answers), [answers]);

  return (
    <>
      {countries
        .filter(
          (country, idx) =>
            country[0].toLowerCase() ===
              searchValue[0].toLowerCase() &&
            country.toLowerCase().includes(searchValue.toLowerCase()),
        )
        .map((countrySearch, idx) => (
          <li key={idx} className="text-white cursor p-2 list-none">
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
    </>
  );
};

export default CountryList;

// const useFetch = (query, initialState) => {
//   const [data, setData] = useState(initialState);
//   const [url, setUrl] = useState(query);

//   useEffect(() => {
//     let didCancel = false;

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();

//         setData(data);
//       } catch (error) {
//         throw new Error('whoops');
//       }
//     };
//     fetchData();

//     return () => {
//       didCancel = true;
//     };
//   }, [url]);
// };
