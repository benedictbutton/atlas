import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import Tracker from './Tracker';
import styles from '../styles/Intro.module.css';

const Intro = ({ introMessage, setIntroMessage }) => {
  const [open, setOpen] = useState(true);
  const checkBox = useRef(!introMessage);

  const handleCheckBox = useCallback(() => {
    let node = checkBox.current;
    if (node) {
      node.focus();
      node.select();
    }
  }, [checkBox]);

  const closeDisplayIntro = () => {
    if (checkBox.current.checked === introMessage) setIntroMessage();
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-5/6 p-3 overflow-hidden bg-black border-[10px] border-indigo-300/100 border-double">
          <button aria-label="close" onClick={closeDisplayIntro}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="#80b6ec"
              className="absolute top-2 left-2 w-10 h-10"
            >
              <g>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </g>
            </svg>
          </button>
          <p className="flex-1 w-full mb-3 text-center text-4xl text-[#80b6ec]">
            How To Label The World
          </p>
          <div className="flex justify-center">
            <div className="w-1/2 h-full flex-wrap content-start align-center p-4">
              <ul className="text-[#1b83ff] text-lg list-decimal p-3 border-r-2 border-[#80b6ec] border-solid">
                <li className="p-2">
                  Click a geographical area on the map. The
                  surrounding region will then zoom into focus.
                </li>
                <li className="p-2">
                  Once a region is in focus, clicking a country will
                  now display an input form.
                </li>
                <li className="p-2">
                  Use the input form to search for the country you
                  believe correctly labels the area clicked. If
                  correct, the label will be applied to the map.
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <div className="text-center">
                <Tracker />
              </div>
              <p className="text-[#1b83ff] text-center text-lg">
                When a region is in focus, the above tracker displays
                your correct & incorrect attempts at labeling.
              </p>
            </div>
          </div>
          <div
            className={styles.checkboxWrapper}
            onClick={handleCheckBox}
          >
            <input
              id="displayIntro"
              type="checkbox"
              ref={checkBox}
              className={`${styles.promotedCheckbox} invisible`}
            />
            <svg>
              <use href="#checkmark-28" />
            </svg>
            <label
              htmlFor="displayIntro"
              className={styles.promotedCheckbox}
            >
              Don&apos;t show again on sign-in
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <symbol id="checkmark-28" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  fill="none"
                  d="M22.9 3.7l-15.2 16.6-6.6-7.1"
                ></path>
              </symbol>
            </svg>
          </div>
        </div>
      )}
    </>
  );
};

export default Intro;
