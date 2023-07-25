import { Dispatch, SetStateAction, useRef } from 'react';
import useShowAllCountries from '../../utils/useShowAllCountries';
import styles from '../../styles/Switch.module.css';
import { Answer } from '../../__generated__/graphql';

const Switch = ({
  answers,
  setAnswers,
}: {
  answers: CountriesObject;
  setAnswers: Dispatch<SetStateAction<CountriesObject>>;
}) => {
  const toggleInput = useRef(null);
  const { showAll, showAllCountries, hideAllCountries } =
    useShowAllCountries(answers, setAnswers);

  return (
    <div className={styles.switch}>
      <span>
        <input
          type="checkbox"
          id="toggleInput"
          ref={toggleInput}
          checked={!showAll}
        />
        <button
          className={styles.slider}
          type="button"
          onClick={() => {
            if (showAll) showAllCountries();
            else hideAllCountries();
          }}
        ></button>
      </span>
      <label
        htmlFor="toggleInput"
        style={{ color: showAll ? '#1b83ff' : '#df001d' }}
        onClick={() => {
          if (showAll) showAllCountries();
          else hideAllCountries();
        }}
      >
        {showAll && 'Show All Countries'}
        {!showAll && 'Hide All Countries'}
      </label>
    </div>
  );
};

export default Switch;
