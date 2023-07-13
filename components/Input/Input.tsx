import TallInput from './TallInput';
import WideInput from './WideInput';
import useViewport from '../../utils/useViewport';

type Answers = {
  [key: string]: boolean | null;
};

export interface InputProps {
  searchValue: string;
  handleSearchValue: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  handleSelectValue: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  zoomIn: string;
  handleSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
  answers: Answers | {};
  regionHeader: string;
  countryName: string;
  game: string | undefined;
  createGame: () => void;
  handleSaveGame: () => void;
  handleResetAnswers: () => void;
}

const Input = ({ ...props }: InputProps) => {
  const { width } = useViewport();

  return (
    <>
      {width >= 920 && <TallInput {...props} />}
      {width < 920 && <WideInput {...props} />}
    </>
  );
};

export default Input;
