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
      } absolute top-1/2 right-[4%] -translate-y-1/2 z-50 flex flex-col w-1/5 h-5/6 overflow-hidden bg-black border-[10px] border-indigo-300/100 border-double`}
    >
      <p
        className={`${
          !zoomIn ? 'collapse' : ''
        } text-3xl text-[#80b6ec] pt-5 px-5`}
      >
        {regionHeader}
      </p>
      <form className="mb-2 p-5" onSubmit={handleSubmit}>
        <label className="w-full">
          <p className="mb-2 text-[#1b83ff] font-semibold leading-normal capitalize">
            {labelType}
          </p>
          <input
            className="w-full p-3 mb-3 text-[#434343] font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            type="text"
            placeholder={capitalLabelType + ' Name'}
            name={labelType}
            ref={forwardRef}
            onChange={handleSearchValue}
          />
        </label>
        <button
          className="w-full h-8 bg-indigo-600 text-white rounded-md disabled:opacity-50"
          disabled={
            answers[`${searchValue}`] === undefined || !labelName
          }
        >
          Submit
        </button>
      </form>
      {searchValue && labelName && (
        <ul className="overflow-auto">
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
        <TallScore
          correct={correct}
          incorrect={incorrect}
          total={total}
        />
      )}
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
    </div>
  );
};

export default TallInput;
