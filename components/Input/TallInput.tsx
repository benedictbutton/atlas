import { InputProps } from './Input';
import CountryList from './CountryList';
import TallScore from './TallScore';
import GameButton from './GameButton';

const TallInput = ({
  searchValue,
  handleSearchValue,
  handleSelectValue,
  zoomIn,
  handleSubmit,
  answers,
  regionHeader,
  countryName,
  game,
  createGame,
  handleSaveGame,
  forwardRef,
}: InputProps) => {
  return (
    <div
      className={`input ${
        !zoomIn ? 'collapse' : ''
      } absolute bottom-5 right-5 w-1/4 h-5/6 overflow-hidden bg-black border-[10px] border-indigo-300/100 border-double`}
    >
      <div className="flex flex-wrap content-start h-auto p-5">
        <p
          className={`text ${
            !zoomIn ? 'collapse' : ''
          } w-full mb-3 text-3xl text-[#80b6ec]`}
        >
          {regionHeader}
        </p>
        <label className="inline-block w-full mt-2 mb-4">
          <p className="mb-2 text-[#1b83ff] font-semibold leading-normal">
            Country
          </p>
          <input
            className="px-4 py-3.5 w-full text-[#434343] font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            id="signInInput1-1"
            type="text"
            placeholder="Country Name"
            name="country"
            ref={forwardRef}
            onChange={handleSearchValue}
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
      </div>
      {searchValue && countryName && (
        <ul className="h-full overflow-auto p-3">
          <CountryList
            searchValue={searchValue}
            handleSelectValue={handleSelectValue}
            answers={answers}
          />
        </ul>
      )}
      {!searchValue && <TallScore answers={answers} />}
      {searchValue && !countryName && (
        <p className="p-5 text-[#df001d] text-xl">
          Must select a country first
        </p>
      )}
      {/* <GameButton
        createGame={createGame}
        saveGame={handleSaveGame}
        game={game}
      /> */}
    </div>
  );
};

export default TallInput;
