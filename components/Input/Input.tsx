import CountryList from './CountryList';
import Score from './Score';

type InputProps = {
  searchValue: string;
  handleSearchValue: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  handleSelectValue: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  zoomIn: string;
  handleSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
  answers: string[];
  regionHeader: string;
  countryName: string;
};

const Input = ({
  searchValue,
  handleSearchValue,
  handleSelectValue,
  zoomIn,
  handleSubmit,
  answers,
  regionHeader,
  countryName,
}: InputProps) => {
  return (
    <div className="flex flex-wrap p-5">
      <p
        className={`text ${
          !zoomIn ? 'collapse' : ''
        } w-full h-full mb-3 text-3xl text-white`}
      >
        {regionHeader}
      </p>
      <label className="inline-block w-full mt-2 mb-4">
        <p className="mb-2 text-[#1b83ff] font-semibold leading-normal">
          Country
        </p>
        <input
          className="capitalize px-4 py-3.5 w-full text-[#434343] font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
          id="signInInput1-1"
          type="text"
          placeholder="Country Name"
          name="country"
          onChange={handleSearchValue}
          value={searchValue}
        />
      </label>
      <button
        className="flex-initial w-full h-8 mt-3 mb-5 bg-indigo-600 text-white rounded-md disabled:opacity-50"
        disabled={
          answers[`${searchValue}`] === undefined || !countryName
        }
        onClick={handleSubmit}
      >
        Submit
      </button>
      {searchValue && (
        <CountryList
          searchValue={searchValue}
          handleSelectValue={handleSelectValue}
          answers={answers}
        />
      )}
      {!searchValue && <Score answers={answers} />}
    </div>
  );
};

export default Input;
