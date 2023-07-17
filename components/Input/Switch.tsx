import { useRef } from 'react';
import useShowAllCountries from '../../utils/useShowAllCountries';
import styles from '../../styles/Switch.module.css';

const Switch = ({ answers, setAnswers }) => {
  const toggleInput = useRef();
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
