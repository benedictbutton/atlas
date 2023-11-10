import { InputProps } from './InputPanel';
import Reset from './Reset';
import SearchList from './SearchList';
import Switch from './Switch';
import WideScore from './WideScore';
import useScore from '../../utils/useScore';

const WideInput = ({
  searchValue,
  handleSelectValue,
  zoomIn,
  answers,
  setAnswers,
  cribData,
  regionHeader,
  labelName,
  labelPlural,
  handleResetAnswers,
  total,
  children,
}: InputProps) => {
  const [correct, incorrect] = useScore(answers);

  return (
    <div
      className={`input ${
        !zoomIn ? 'collapse' : ''
      } fixed bottom-5 left-1/2 -translate-x-1/2 w-5/6 h-52 overflow-hidden bg-black border-[10px] border-indigo-300/100 border-double z-50`}
    >
      <div className="flex flex-col w-full h-full flex-wrap content-start align-center pl-3 py-2">
        <div className="w-1/2">
          <p
            className={`text ${
              !zoomIn ? 'collapse' : ''
            } mb-1 text-3xl text-[#80b6ec]`}
          >
            {regionHeader}
          </p>
          {children[0]}
        </div>
        {!searchValue && (
          <div className="relative w-1/2 h-full text-center">
            <div className="h-[95%]">
              <WideScore
                correct={correct}
                incorrect={incorrect}
                total={total}
              />
            </div>
            <div className="flex justify-around absolute bottom-[-3%] left-0 w-full">
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
        {children[1]}
      </div>
    </div>
  );
};

export default WideInput;
