import { Dispatch, ReactElement, SetStateAction } from 'react';

type PageArrowsProps = {
  width: number | undefined;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  close: ReactElement;
};

const PageArrows = ({
  width,
  page,
  setPage,
  close,
}: PageArrowsProps) => {
  return (
    <>
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
          {close}
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
          {close}
        </>
      )}
    </>
  );
};

export default PageArrows;
