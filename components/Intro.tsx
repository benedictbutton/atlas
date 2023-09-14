import { useState } from 'react';
import { MutationFunction } from '@apollo/client';
import Tracker from './Tracker';
import useDelayedUnmounting from '../utils/useDelayedUnmounting';
import useViewport from '../utils/useViewport';
import styles from '../styles/Intro.module.css';

const Intro = ({
  introMessage,
  setIntroMessage,
}: {
  introMessage: boolean | undefined;
  setIntroMessage: MutationFunction;
}) => {
  const [checkBox, setCheckBox] = useState(!introMessage);
  const [isMounted, setIsMounted] = useState(true);
  const { width } = useViewport();
  const [page, setPage] = useState(1);

  const shouldRender = useDelayedUnmounting(isMounted, 5000);

  const closeDisplayIntro = () => {
    if (checkBox === introMessage) setIntroMessage();
    setIsMounted(!isMounted);
  };

  console.log('page: ', page);
  console.log((width && width > 640) || page !== 1);

  return (
    <>
      {shouldRender && (
        <div
          className={`${
            isMounted ? styles.mounted : styles.unmounting
          } fixed top-1/4 left-1/2 z-30 w-5/6 max-lg:h-[85%] max-lg:top-0 max-lg:bottom-0 max-lg:m-auto p-3 overflow-hidden bg-black border-[10px] border-indigo-300/100 border-double opacity-90`}
        >
          {width && width > 640 && (
            <button aria-label="close" onClick={closeDisplayIntro}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#80b6ec"
                className="absolute top-2 right-2 w-10 h-10"
              >
                <g>
                  <path
                    fill="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </g>
              </svg>
            </button>
          )}
          <p className="flex-1 w-full my-3 text-center text-4xl text-[#80b6ec]">
            How To Map The World
          </p>

          <div className="flex max-lg:flex-col justify-center align-center">
            {page === 1 && (
              <div className="w-full lg:w-1/2 h-full p-4 max-lg:py-0">
                <ul className="text-[#1b83ff] text-lg list-decimal p-3 border-r-2 border-[#80b6ec] border-solid max-lg:border-none">
                  <li className="p-2">
                    Click a geographical area on the map. The
                    surrounding region will then zoom into focus.
                  </li>
                  <li className="p-2">
                    Once a region is in focus, clicking a country or
                    territory will display an input form.
                  </li>
                  <li className="p-2">
                    Use the input form to search for the name you
                    believe correctly labels the area you clicked. If
                    correct, the label will be applied to the map.
                  </li>
                </ul>
              </div>
            )}

            {((width && width > 640) || page !== 1) && (
              <div className="w-full lg:w-1/2 max-lg:flex max-lg:flex-reverse max-lg:items-center max-md:flex-col">
                <div className="text-center">
                  <Tracker isMounted={isMounted} />
                </div>
                <p className="text-[#1b83ff] text-center text-lg max-md:mt-9">
                  When a region is in focus, the above tracker
                  displays your correct & incorrect attempts at
                  labeling.
                </p>
              </div>
            )}
          </div>

          {width && width < 640 && page === 1 && (
            <>
              <button onClick={() => setPage(2)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#80b6ec"
                  className="absolute bottom-2 right-2 w-9 h-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
              <button
                onClick={closeDisplayIntro}
                className="absolute bottom-2 left-2 text-xl text-[#80b6ec]"
              >
                Close
              </button>
            </>
          )}
          {width && width < 640 && page === 2 && (
            <>
              <button onClick={() => setPage(1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="#80b6ec"
                  className="absolute bottom-2 left-2 w-9 h-9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </button>
              <button
                onClick={closeDisplayIntro}
                className="absolute bottom-2 right-2 text-xl text-[#80b6ec]"
              >
                Close
              </button>
            </>
          )}
          {((width && width > 640) || page === 2) && (
            <div
              className={`relative max-lg:absolute max-md:bottom-3 max-md:left-1/2 max-md:-translate-x-1/2 ${styles.checkboxWrapper}`}
              onClick={(e) => {
                e.preventDefault();
                setCheckBox(!checkBox);
              }}
            >
              <input
                id="displayIntro"
                type="checkbox"
                checked={checkBox}
                className={`${styles.promotedCheckbox} invisible`}
              />
              <svg>
                <use href="#checkmark-28" />
              </svg>
              <label
                htmlFor="displayIntro"
                className={styles.promotedCheckbox}
              >
                Don&apos;t show again
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
          )}
        </div>
      )}
    </>
  );
};

export default Intro;
