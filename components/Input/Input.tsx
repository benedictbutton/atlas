import TallInput from './TallInput';
import WideInput from './WideInput';
import useViewport from '../../utils/useViewport';

type InputProps = {
  searchValue: string;
  handleSearchValue: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  handleSelectValue: (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  zoomIn: string;
  handleSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
  answers: string[];
  regionHeader: string;
  countryName: string;
};

const Input = ({ ...props }) => {
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
