import { InputProps } from './Input';
import Reset from './Reset';
import Switch from './Switch';
import TallScore from './TallScore';
import GameButton from './GameButton';
import SearchList from './SearchList';
import useScore from '../../utils/useScore';

const TallInput = ({
  searchValue,
  handleSelectValue,
  zoomIn,
  answers,
  setAnswers,
  cribData,
  regionHeader,
  labelName,
  labelPlural,
  game,
  createGame,
  handleSaveGame,
  handleResetAnswers,
  total,
  children,
}: InputProps) => {
  const [correct, incorrect] = useScore(answers);

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
      {children}
      {searchValue && labelName && (
        <ul className="overflow-auto">
          <SearchList
            searchValue={searchValue}
            handleSelectValue={handleSelectValue}
            answers={answers}
          />
        </ul>
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
