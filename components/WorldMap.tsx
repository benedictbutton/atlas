import {
  useState,
  useCallback,
  SetStateAction,
  useMemo,
  useRef,
  MouseEvent,
} from 'react';
import { debounce } from 'lodash';
import CloseButton from './Input/Close';
import Countries from './Countries';
import CountriesZoomOut from './CountriesZoomOut';
import CountriesZoomIn from './CountriesZoomIn';
import HelperText from './Input/HelperText';
import Input from './Input/Input';
import InputForm from './Input/InputForm';
import SubmitButton from './Input/SubmitButton';
import TextField from './Input/TextField';
import IslandTerritories from './Regions/IslandTerritories';
import IntroMessage from './IntroMessage/IntroMessage';
import Profile from './Profile';
import useAnswers from '../utils/useAnswers';
import useIntroMessage from '../utils/useIntroMessage';
import useZoom from '../utils/useZoom';
import { countries, sampleGame } from '../data/countries';

export interface RegionProps extends CountryProps {
  countryId: string;
  className: string;
}

const unitedKingdom = [
  'England',
  'Northern Ireland',
  'Scotland',
  'Wales',
];

const WorldMap = () => {
  const [countryName, setCountryName] = useState('');
  const [countryId, setCountryId] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const { answers, setAnswers, createGame, handleSaveGame, game } =
    useAnswers(countries);
  const [regionHeader, zoomIn, setZoomIn] = useZoom();
  const [introMessage, setIntroMessage] = useIntroMessage();
  const formInput = useRef<HTMLInputElement | null>(null);
  const total = 196;

  const handleZoom = useCallback(
    (
      event:
        | {
            currentTarget: { id: SetStateAction<string> };
            target: SVGGElement;
          }
        | MouseEvent<SVGGElement | HTMLButtonElement>,
      close: string | undefined,
    ): void => {
      if (zoomIn === '') setZoomIn(event.currentTarget.id);
      else if (close) {
        setCountryId('');
        setCountryName('');
        setZoomIn('');
        setSearchValue('');
        if (formInput.current) formInput.current.value = '';
      } else if (
        countryId ===
        ((event.target as SVGGElement).parentNode as SVGGElement).id
      ) {
        setCountryId('');
        setCountryName('');
      } else {
        setCountryId(
          () =>
            ((event.target as SVGGElement).parentNode as SVGGElement)
              .id,
        );
        setCountryName(() => (event.target as SVGGElement).id);
        formInput.current?.focus();
      }
    },
    [zoomIn, setZoomIn, countryId],
  );

  const handleSearchValue = useMemo(
    () =>
      debounce((event: React.ChangeEvent<HTMLInputElement>): void => {
        let word = event.target.value;
        let capitalizedWord =
          word.charAt(0).toUpperCase() + word.slice(1);
        setSearchValue(capitalizedWord);
      }, 300),
    [],
  );

  const handleSelectValue = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setSearchValue(() => event.target.value);
    },
    [],
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      if (
        searchValue === 'United Kingdom, The' &&
        unitedKingdom.includes(countryName)
      )
        setAnswers({
          ...answers,
          ['England']: 1,
          ['Northern Ireland']: 1,
          ['Scotland']: 1,
          ['Wales']: 1,
        });
      else if (countryName !== searchValue)
        setAnswers({ ...answers, [`${countryName}`]: -1 });
      else setAnswers({ ...answers, [`${countryName}`]: 1 });

      setCountryId('');
      setCountryName('');
      setSearchValue('');
      if (formInput.current) formInput.current.value = '';
    },
    [searchValue, countryName, setAnswers, answers],
  );

  const handleResetAnswers = useCallback(() => {
    setCountryId('');
    setCountryName('');
    setSearchValue('');
    // if (formInput.current) formInput.current.value = '';

    const resetAnswers: AnswersObject = {};
    const countries = Object.keys(answers);
    countries.map((country) => {
      resetAnswers[country] = null;
      return resetAnswers;
    });

    setAnswers({ ...answers, ...resetAnswers });
  }, [answers, setAnswers]);

  return (
    <>
      <Profile
        profileIcon="/earth.png"
        iconSize="36px"
        textColor="black"
        menuItemLink="/bones"
        menuItemName="Bones (WIP)"
        menuItemColor="text-[#f9e3b7]"
        zoomIn={zoomIn}
      />
      {introMessage && (
        <IntroMessage
          introMessage={introMessage}
          setIntroMessage={setIntroMessage}
        />
      )}
      <Input
        searchValue={searchValue}
        handleSelectValue={handleSelectValue}
        zoomIn={zoomIn}
        answers={answers}
        setAnswers={setAnswers}
        regionHeader={regionHeader}
        labelName={countryName}
        labelPlural="Countries"
        game={game}
        createGame={createGame}
        handleSaveGame={handleSaveGame}
        handleResetAnswers={handleResetAnswers}
        total={total}
      >
        <InputForm handleSubmit={handleSubmit}>
          <TextField
            className="w-full px-2 py-2.5 mb-0 lg:p-3 lg:mb-3 text-[#434343] font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
            placeholder="Country Name"
            name="country"
            handleChange={handleSearchValue}
            forwardRef={(el: HTMLInputElement) =>
              (formInput.current = el)
            }
          />
          <SubmitButton
            disabled={
              answers[`${searchValue}`] === undefined || !countryName
            }
          />
        </InputForm>
        {searchValue && !countryName && (
          <HelperText message="Select a country before guessing" />
        )}
      </Input>
      {zoomIn && <CloseButton handleZoom={handleZoom} />}
      {/* <Countries> */}
      <svg
        className="h-full bg-[#80b6ec]"
        version="1.2"
        width="100%"
        height="100%"
        stroke-linecap="round"
        stroke-linejoin="round"
        id="map"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 895.92 471.76"
        // preserveAspectRatio="xMinYMin"
        // preserveAspectRatio="none"
      >
        <IslandTerritories />
        <CountriesZoomOut
          zoomIn={zoomIn}
          handleZoom={handleZoom}
          countryId={countryId}
          answers={answers}
        />
      </svg>
      {/* </Countries> */}

      {/* <div
        className={`${
          zoomIn !== ''
            ? styles.region__zoom__in + ' z-10'
            : styles.region__zoom__out + ' z-[-100]'
        } absolute top-0 w-full h-full z-30`}
      /> */}

      <CountriesZoomIn
        zoomIn={zoomIn}
        handleZoom={handleZoom}
        countryId={countryId}
        answers={answers}
      />
    </>
  );
};

export default WorldMap;
