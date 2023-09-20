import TallInput from './TallInput';
import WideInput from './WideInput';
import useViewport from '../../utils/useViewport';
import { Dispatch, SetStateAction } from 'react';

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
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  answers: { [key: string]: number | boolean | null | undefined };
  setAnswers: Dispatch<SetStateAction<AnswersObject>>;
  cribData?: { [key: string]: number | null };
  regionHeader: string;
  labelName: string;
  labelType: string;
  labelPlural: string;
  game: string | null | undefined;
  createGame: () => void;
  handleSaveGame: () => void;
  handleResetAnswers: () => void;
  forwardRef: (el: HTMLInputElement) => HTMLInputElement;
  total: number;
}

const Input = ({ ...props }: InputProps) => {
  const { width } = useViewport();

  return (
    <>
      {width && width >= 920 && <TallInput {...props} />}
      {width && width < 920 && <WideInput {...props} />}
    </>
  );
};

export default Input;
