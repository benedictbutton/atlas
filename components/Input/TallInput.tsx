import { InputProps } from './Input';
import Reset from './Reset';
import Switch from './Switch';
import TallScore from './TallScore';
import GameButton from './GameButton';
import SearchList from './SearchList';
import useScore from '../../utils/useScore';

const TallInput = ({
  searchValue,
  handleSearchValue,
  handleSelectValue,
  zoomIn,
  handleSubmit,
  answers,
  setAnswers,
  cribData,
  regionHeader,
  labelName,
  labelType,
  labelPlural,
  game,
  createGame,
  handleSaveGame,
  handleResetAnswers,
  forwardRef,
  total,
}: InputProps) => {
  const [correct, incorrect] = useScore(answers);
  const capitalLabelType =
    labelType.charAt(0).toUpperCase() + labelType.slice(1);

  return (
    <div
      className={`input ${
        !zoomIn ? 'collapse' : ''
      } absolute top-1/2 right-[4%] -translate-y-1/2 w-1/5 h-5/6 overflow-hidden bg-black border-[10px] border-indigo-300/100 border-double z-50`}
    >
      <div className="flex column flex-col h-full">
        <div className="flex flex-wrap content-start px-5 pt-5">
          <p
            className={`text ${
              !zoomIn ? 'collapse' : ''
            } w-full mb-3 text-3xl text-[#80b6ec]`}
          >
            {regionHeader}
          </p>
          <form className="w-full" onSubmit={handleSubmit}>
            <label className="inline-block w-full mt-2 mb-4">
              <p className="mb-2 text-[#1b83ff] font-semibold leading-normal capitalize">
                {labelType}
              </p>
              <input
                className="px-4 py-3.5 w-full text-[#434343] font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                id="signInInput1-1"
                type="text"
                placeholder={capitalLabelType + ' Name'}
                name={labelType}
                ref={forwardRef}
                onChange={handleSearchValue}
              />
            </label>
            <button
              className="flex-initial w-full h-8 mt-3 mb-5 bg-indigo-600 text-white rounded-md disabled:opacity-50"
              disabled={
                answers[`${searchValue}`] === undefined || !labelName
              }
            >
              Submit
            </button>
          </form>
        </div>
        {searchValue && labelName && (
          <ul className="h-full overflow-auto p-3">
            <SearchList
              searchValue={searchValue}
              handleSelectValue={handleSelectValue}
              answers={answers}
            />
          </ul>
        )}
        {searchValue && !labelName && (
          <p className="p-5 text-[#df001d] text-xl">
            Select a {labelType} before guessing
          </p>
        )}
        {!searchValue && (
          <>
            <TallScore
              correct={correct}
              incorrect={incorrect}
              total={total}
            />
            {/* <GameButton
              createGame={createGame}
              saveGame={handleSaveGame}
              game={game}
            /> */}
            <div className="flex flex-wrap-reverse justify-between items-start mt-auto p-2">
              <Switch
                answers={answers}
                setAnswers={setAnswers}
                cribData={cribData}
                labelPlural={labelPlural}
              />
              <Reset
                correct={correct}
                incorrect={incorrect}
                handleResetAnswers={handleResetAnswers}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TallInput;
