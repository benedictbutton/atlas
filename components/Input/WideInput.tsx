import { InputProps } from './Input';
import Reset from './Reset';
import SearchList from './SearchList';
import Switch from './Switch';
import WideScore from './WideScore';
import useScore from '../../utils/useScore';

const WideInput = ({
  searchValue,
  handleSearchValue,
  handleSelectValue,
  zoomIn,
  handleSubmit,
  answers,
  setAnswers,
  answerData,
  regionHeader,
  labelName,
  labelType,
  labelPlural,
  handleResetAnswers,
  forwardRef,
  total,
}: InputProps) => {
  const [correct, incorrect] = useScore(answers);
  const placeholderLabelType =
    labelType.charAt(0).toUpperCase() + labelType.slice(1);

  return (
    <div
      className={`input ${
        !zoomIn ? 'collapse' : ''
      } fixed bottom-5 left-1/2 -translate-x-1/2 w-5/6 h-52 overflow-hidden bg-black border-[10px] border-indigo-300/100 border-double z-50`}
    >
      <div className="flex flex-col h-full flex-wrap content-start align-center pl-3 py-2">
        <p
          className={`flex-1 text ${
            !zoomIn ? 'collapse' : ''
          } w-1/4 mb-1 text-3xl text-[#80b6ec]`}
        >
          {regionHeader}
        </p>
        <div className="w-1/5">
          <form className="w-full" onSubmit={handleSubmit}>
            <label className="inline-block w-full mt-1 mb-4">
              <p className="mb-2 text-[#1b83ff] font-semibold leading-normal capitalize">
                {labelType}
              </p>
              <input
                className="px-2 py-2.5 w-full text-[#434343] font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
                id="signInInput1-1"
                type="text"
                placeholder={placeholderLabelType + ' Name'}
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
        {!searchValue && (
          <div className="relative w-[55%] h-full text-center">
            <WideScore
              correct={correct}
              incorrect={incorrect}
              total={total}
            />
            <div className="flex justify-around absolute bottom-[-3%] left-0 w-full">
              <Switch
                answers={answers}
                setAnswers={setAnswers}
                answerData={answerData}
                labelPlural={labelPlural}
              />
              <Reset
                correct={correct}
                incorrect={incorrect}
                handleResetAnswers={handleResetAnswers}
              />
            </div>
          </div>
        )}
        {searchValue && labelName && (
          <ul className="flex flex-col flex-wrap w-[55%] justify-center overflow-auto ml-2 px-3">
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
      </div>
    </div>
  );
};

export default WideInput;
