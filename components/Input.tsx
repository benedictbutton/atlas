import CountryList from './CountryList';

const Input = ({ searchValue, handleSearchValue }) => {
  return (
    <div className="w-80 p-5">
      <CountryList searchValue={searchValue} />
      <label className="block mb-4">
        <p className="mb-2 text-blue-200 font-semibold leading-normal">
          Country
        </p>
        <input
          className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
          id="signInInput1-1"
          type="text"
          placeholder="Enter email address"
          name="country"
          onChange={(event) => handleSearchValue(event)}
          value={searchValue}
        />
      </label>
    </div>
  );
};

export default Input;
