import { PropsWithChildren, ReactNode } from 'react';
import TallInput from './TallInput';
import WideInput from './WideInput';
import useViewport from '../../utils/useViewport';
import { Dispatch, SetStateAction } from 'react';

type Answers = {
  [key: string]: boolean | null;
};

export interface InputProps {
  searchValue: string;
  handleSelectValue: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  zoomIn: string;
  answers: { [key: string]: number | boolean | null | undefined };
  setAnswers: Dispatch<SetStateAction<AnswersObject>>;
  cribData?: { [key: string]: number | null };
  regionHeader: string;
  labelName: string;
  labelPlural: string;
  game: string | null | undefined;
  createGame: () => void;
  handleSaveGame: () => void;
  handleResetAnswers: () => void;
  total: number;
  children: ReactNode[];
}

const InputPanel = ({ ...props }: PropsWithChildren<InputProps>) => {
  const { width } = useViewport();

  return (
    <>
      {width && width >= 920 && <TallInput {...props} />}
      {width && width < 920 && <WideInput {...props} />}
    </>
  );
};

export default InputPanel;
