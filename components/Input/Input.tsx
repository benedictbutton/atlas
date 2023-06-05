import { useMemo } from 'react';
import CountryList from './CountryList';

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
  countries: string[];
};

const Input = ({
  searchValue,
  handleSearchValue,
  handleSelectValue,
  zoomIn,
  handleSubmit,
  countries,
}: InputProps) => {
  const findRegion = useMemo(() => {
    const regions = [
      'Middle East, North Africa, & Greater Arabia',
      'Sub-Saharan Africa',
      'South America',
      'Europe',
      'Australia and Oceania',
    ];

    let region = '';
    switch (zoomIn) {
      case 'asia':
        region = 'Asia';
        break;
      case 'middleEast':
        region = 'Middle East, North Africa, & Greater Arabia';
        break;
      case 'africa':
        region = 'Sub-Saharan Africa';
        break;
      case 'southAmerica':
        region = 'South America';
        break;
      case 'europe':
        region = 'Europe';
        break;
      case 'oceania':
        region = 'Australia and Oceania';
        break;
      default:
        region = 'Africa';
        break;
    }
    return region;
  }, [zoomIn]);

  return (
    <div className="p-5">
      <p className="mb-3 text-3xl text-white">{findRegion}</p>
      <label className="mb-4">
        <p className="mb-2 text-[#1b83ff] font-semibold leading-normal">
          Country
        </p>
        <input
          className="px-4 py-3.5 w-full text-[#434343] font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
          id="signInInput1-1"
          type="text"
          placeholder="Country Name"
          name="country"
          onChange={handleSearchValue}
          value={searchValue}
        />
      </label>
      <button
        className="w-full h-8 mt-3 mb-5 bg-indigo-600 text-white rounded-md"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <CountryList
        searchValue={searchValue}
        handleSelectValue={handleSelectValue}
        countries={countries}
      />
    </div>
  );
};

export default Input;
