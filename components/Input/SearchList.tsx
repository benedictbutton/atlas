import { useMemo } from 'react';

const SearchList = ({ searchValue, handleSelectValue, answers }) => {
  const listItems = useMemo(() => Object.keys(answers), [answers]);

  return (
    <>
      {listItems
        .filter(
          (item, idx) =>
            item[0].toLowerCase() === searchValue[0].toLowerCase() &&
            item.toLowerCase().includes(searchValue.toLowerCase()),
        )
        .map((itemSearch, idx) => (
          <li key={idx} className="text-white cursor p-2 list-none">
            <input
              id={itemSearch}
              type="radio"
              value={itemSearch}
              checked={searchValue === itemSearch}
              onChange={(event) => handleSelectValue(event)}
              className="mr-3"
            />
            <label htmlFor={itemSearch} className="cursor-pointer">
              {itemSearch}
            </label>
          </li>
        ))}
    </>
  );
};

export default SearchList;

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
