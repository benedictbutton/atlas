import TallInput from './TallInput';
import WideInput from './WideInput';
import useViewport from '../../utils/useViewport';

interface Answers {
  [key: string]: boolean | null;
}

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
}

const Input = ({ ...props }: InputProps) => {
  const { width } = useViewport();

  return (
    <>
      <div>
        {width >= 920 && <TallInput {...props} />}
        {width < 920 && <WideInput {...props} />}
      </div>
    </>
  );
};

export default Input;
