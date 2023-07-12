import { useRef } from 'react';
import Africa from './Regions/Africa';
import Asia from './Regions/Asia';
import CentralAmerica from './Regions/CentralAmerica';
import Europe from './Regions/Europe';
import MiddleEast from './Regions/MiddleEast';
import NorthAmerica from './Regions/NorthAmerica';
import Oceania from './Regions/Oceania';
import Russia from './Regions/Russia';
import SouthAmerica from './Regions/SouthAmerica';
import styles from '../styles/Regions.module.css';

export interface Answers {
  [key: string]: boolean | null;
}

export interface CountryProps {
  zoomIn: string;
  handleZoom: (
    event: React.MouseEventHandler<SVGGElement>,
    close: string | undefined,
  ) => void;
  countryId: string;
  answers: Answers | {};
}

export interface RegionProps extends CountryProps {
  countryId: string;
  className: string;
}

const Countries = ({
  zoomIn,
  handleZoom,
  countryId,
  answers,
}: CountryProps) => {
  // const lastChild = useRef<SVGGElement | null>(null);

  return (
    <>
      <g id="g4216">
        <path
          id="Guadeloupe"
          d="m295.69 253.03-.1.12h-.16l-.07-.12.03-.1.11-.1.12.05zm-.88-.9v.11l-.07.04.06.34-.03.15-.07.09-.25.11-.01-.1-.08-.06-.1-.19v-.19l-.07-.21.01-.11.06-.14h.12l.27.1.08.1zm.02 0 .03-.15.08-.03-.06-.11-.03-.14.07-.1.11-.05.16.14.01.16.14.14h.12l.26.18-.11.02-.45.1-.13.04-.11-.02-.11-.11z"
          fill="#d1dbdd"
          fill-opacity="1"
          stroke="#000"
          stroke-opacity="1"
          strokeWidth=".15"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          data-originalStrokeWidth="0.15"
          style={{
            fill: 'rgb(209, 219, 221)',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <g id="g4219">
        <path
          d="m296.65 256.75-.08.14-.07-.16-.06.03-.27-.03-.16.02-.1-.12.17-.12h.1l-.04-.13-.18.03-.18-.16-.03-.17-.13-.22.04-.1.1-.05.17.02.25.15.1.16.14-.07-.07.22.1.15.1.09z"
          id="Martinique"
          fill="#d1dbdd"
          fill-opacity="1"
          stroke="#000"
          stroke-opacity="1"
          strokeWidth=".15"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          data-originalStrokeWidth="0.15"
          style={{
            fill: 'rgb(209, 219, 221)',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <g id="g4234">
        <path
          d="m621.99 427.45-.14-.06.07-.08.24.22-.06.04zm-2.86-.64-.03.05h-.24l-.12-.05.08-.07.22.03zm1.97-.46-.14-.02.27-.12.03.04-.08.13zm-.99-.68.18-.21.12-.1.1.05-.1.11.24-.04-.1.17-.11.1.02.11-.05.08-.23.08-.03-.02v-.17zm.08-.42.05.12-.06.03-.11.21h-.1l.07-.2.1-.14zm.6.1-.1-.07.03-.12.11.08zm2.7.95.05.11-.04.16-.07.13-.16.16-.26-.06-.11.13.2.09-.05.08-.22.03-.11-.26-.25-.07-.19.06h-.11l-.3-.06-.06.1.07.1.1.1-.1.04-.16-.15-.11.03.05.15-.03.12.02.14.2.08.22.03.39.16-.18-.14-.04-.17.22-.05.2.07h.2l.06.15-.22.18.1.07-.07.12h-.23l-.07.07-.14.02-.14-.06-.2.01-.19-.07-.16-.24-.03-.27-.1-.07-.17.04v.1l.12.12-.02.18-.1.09-.2-.07-.3-.03-.24-.22h-.22l-.15-.24-.06.1-.06.2-.16.07-.02-.15-.08.08.08.2-.09.15-.21.1-.05-.04-.34.03-.09-.03-.06-.1.03-.28.16-.28-.05-.06.2-.18-.08-.2h-.16l.12-.13.17-.02v-.11l-.22.05-.1-.18-.07-.19.11.06.11-.12v-.07l-.13-.06-.14-.17.03-.1.09-.02.04-.08v-.16h.12l.05-.06-.2-.26-.01-.06.15-.08h.1l.01-.13.08-.05-.03-.14.09-.16.15-.06.1.06.05.13.1.05-.33.22.09.2.13-.23.2-.11.1.07-.2.1.13.12-.08.11-.12.3-.15.12-.06.26.17.06-.02-.22.1-.15.11.05.06.11.03.22.09.03.34-.13.21-.22.09.22.11-.28.18-.13.02.17-.07.14h.1l.12.04-.2.09.17.03v.08l-.28.04-.12-.04-.22-.04-.28.23.03.04.3-.19.14.05-.22.1.15.04.11.14-.2.11.43-.03.36-.06-.16.12-.03.08h.15l.2-.18.03.12.15-.16-.03-.1.26-.16.34-.11.26.11.1-.08.09-.19.15-.07h.18l.17.07.11.07.03.16zm-46.57-8.9.08.12-.11.11h-.16l-.13-.03-.1-.11v-.12l.18-.1.1.04.04.09zm-4.13-.96.23-.06.06.1v.1l-.07.05-.18-.07zm68-24.63h.1l.08.05.02.1-.11.07-.14-.15zm-92.38-42.35-.02.1-.09-.04.01-.08z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="French_Southern_and_Antarctic_Lands"
          fill-opacity="1"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill: 'rgb(209, 219, 221)',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <g id="g4258">
        <path
          d="m556.9 323.77.16.1-.08.06-.17-.03h-.17l-.11-.15-.02-.12.24.03zm1.85-.19v.3l-.07.06-.08-.1-.18-.14-.03-.07-.13-.05-.28-.15.04-.03.21.06.13-.01.11-.16-.01-.09.11-.04.07.04zm-2.65-1.04.08.13-.04.12-.12.03-.15-.18-.15-.02-.12-.1-.12-.16v-.07l.07-.12-.01-.09.03-.45-.02-.06.08-.14.2-.05.1.14-.05.47.02.11.11.15.05.22z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Comoros"
          fill-opacity="1"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill: 'rgb(209, 219, 221)',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <g id="g4261">
        <path
          d="m464.58 291.98.15.18.05.13-.06.16-.09.1-.1.18-.12.07h-.1l-.04.12h-.1l-.04-.17-.1-.31.02-.12.16-.19.1-.04.17-.11zm1.94-3.15-.07.04-.02.23-.11.07-.12-.07v-.12l.07-.05.02-.1.08-.06z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="São_Tomé_and_Principe"
          fill-opacity="1"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill: 'rgb(209, 219, 221)',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <g id="g4264">
        <path
          d="m386.49 255.65.04.06v.12l-.07.07-.07-.07-.01-.14zm1-.04v.13l-.2.12-.17-.05-.14-.11-.05-.11.1-.17.21-.11.1-.03.08.04.06.13zm2.1-.27.03.03-.11.23-.11.03-.23-.02-.12-.05-.14-.13v-.08l-.1-.06-.05-.13.04-.09-.03-.11.09-.16-.07-.2.07-.05.08.03.05.14.11.07.17.19.08.02.11.11zm.82-.74.04.29-.04.14-.14.06-.14-.08-.05-.06.06-.14-.03-.11.15-.15zm1.12-2.04v.13l-.18.14-.14.05-.14.01-.2-.09-.05-.09.01-.09.12-.09-.04-.22.05-.05.19.07.09-.07.2.06.08.1zm-3.46-1.28.1.13h-.21l-.3-.1-.1.03-.15.24-.11-.25-.07-.02-.04-.16.15-.04.2.11.14-.03.13.05zm2.83.05-.02-.19-.11-.14.03-.08-.05-.16.17-.11.07.08-.02.29.04.04-.04.24zm-4.94-.77.08.08.02.1-.1.05-.2.05-.16-.06-.08-.1.12-.09.19-.1h.08zm-.34-.36-.15.1-.18.18-.28.02-.04-.05v-.17l-.1-.08v-.08l.1-.1h.08l.1-.08.35-.15.16.04.03.09.14.1-.12.14z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Cabo_Verde"
          fill-opacity="1"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill: 'rgb(209, 219, 221)',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <g id="g4267">
        <path
          d="M431.4 117.13h-.06l-.14-.13-.23-.16-.11-.11.01-.1-.15-.15-.09-.23.12-.08.09.02-.1.18.23-.02.07.06.16.03.05.09-.11.1.13.02-.1.2.16.05.1.19zm.11-1.62-.06.06v.15l-.09.07-.2-.28-.22-.04-.07-.03-.03-.11-.07-.16.21.04h.08l.11.08.2.05zm-1.93-1.05-.11-.13.05-.08.1.07h.12l.09-.1.15.03.16.07.07.09.19.02.04.05-.09.14-.18.04-.1.06-.19-.08-.15-.02-.14-.1zm.4-.29.05-.26v-.14l.03-.14.3.08.06.15.11.16v.1l.24.1.12.03.01.1.1.07.07.1-.06.12h.16l.07.05-.03.16.08.04v.14l-.1.03-.14-.14-.16-.08-.13-.17-.11-.04-.05-.13-.13-.12-.25-.05-.02-.07-.1-.01zm.42-.46-.07-.07.24-.1.11-.02.15.11-.07.11.18-.05.22.1-.09.11.08.07.11-.01.15.03.08.09h-.22l-.04.03.3.12-.1.05.02.11-.06.15h-.08l-.05-.27-.08.16-.1-.06-.19-.18h-.1l-.14-.1-.16-.19zm1.29.38-.11-.14.09-.17-.01-.14-.06-.15.07-.06.06.14.1.12.23.13-.08.14.04.13-.1.02-.08-.04-.07-.1-.08-.01zm.54-.45.03.1v.12l-.12.02-.07-.14zm-.66.07-.08.09-.14-.21-.03-.1.06-.1zm-.17.1-.06.08-.08-.16-.13-.17-.06-.13h.08l.07.12zm.6-.24-.03.13-.16-.07-.09-.14-.04-.2.09.04.13.27z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Faeroe_Islands"
          fill-opacity="1"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill: 'rgb(209, 219, 221)',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <g id="g4276">
        <path
          d="m380.15 461.6.05-.07h.23l-.04.11-.15.02zm-.2-.08v.12l-.17-.09.05-.07zm1.75-1.57h.16l.16.09-.11.09-.12.03h-.1l-.06-.15zm.92-2.09.05.11-.04.1-.11-.05-.33-.1-.07-.1.07-.14h.3l.16.06zm-.4-2.24-.14-.05-.1-.11.1-.09h.1l.04.11.12.07zm-1.81-4.07.13.07-.03.07-.14.03-.12-.09zm-1.15-1.34.09-.08.11.04-.11.13zm-23.57-6.36.16.1-.12.06-.1-.08zm2.92.76-.01.1.1.07.22.07-.12.11-.14-.02-.12.1-.15-.05-.03.08.14.03v.12h-.14l-.16.08-.13-.03-.06-.11-.1-.12-.12-.05-.15-.18-.03-.2-.1-.1-.17-.23-.16-.08.05-.11-.1-.1-.1-.04-.14.06h-.11l-.1-.12-.32-.12.04-.1-.08-.09-.15-.03.01-.15-.29.04-.21-.11.02-.1-.19-.1-.22-.02-.23.05-.08.04-.11-.1.2-.07-.09-.15.11-.04.15-.1h-.22l-.1.01-.1-.04h-.23l-.07.11-.29.02-.13-.13.09-.05-.05-.08.18-.13.04-.07h-.3l-.13.03-.13-.05-.22.05-.2-.07.24-.11h.12l.1.05.22-.09.11-.02v.1l.5-.01.12.03v.12l.1.02.28-.02.15.07.16-.07.14.02-.08.09.05.11.16-.16.13-.04.09.07-.16.13.1.02.25-.16.23.08-.04.15.07.01.02-.13.07-.03.25.05.07.04-.03.1h-.12l.06.1.3-.05.06.07-.1.04-.3.18.11.11.23-.14.12-.01.06.05-.08.07.03.22.12-.09.16.16.1-.01-.05-.2-.1-.11v-.07l.23.09.11.05.06.2-.02.1h.2l-.03.21.07.07h.12l.14.04.06.11-.2.17.13.1h.23l.16-.08-.05.14-.07.1z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="South_Georgia_and_the_South_Sandwich_Islands"
          fill-opacity="1"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill: 'rgb(209, 219, 221)',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      <g id="g4279">
        <path
          d="M299.43 436.21v.11l-.09.04-.04-.08v-.12l-.11-.09.19-.02.09.06zm-3.74-1.3-.05.14h-.1l.07-.2zm.62.44h-.11l-.12-.03-.06-.11-.13-.06v-.22h.14l.08-.11.11-.05.11.1-.06.06-.11.06-.05.09.18-.05.17-.11.02.12-.07.14h.12l-.07.1zm-.8-.9-.02.26-.1-.1.04-.1zm4.07.2-.23.2-.27.32-.1.18-.14.05-.16.1-.02-.12-.15-.06-.08.2-.41-.05-.07.09.07.18-.05.09-.2.2-.08.01-.08-.04-.06.06-.22-.18-.04.07.11.07.03.11-.1.11-.13.06h-.14l-.09-.14.06-.03-.13-.18.02-.09h-.25l.18.18-.17.05-.17-.2h-.1l-.17-.16-.15-.06.04-.11.34.08.35-.1-.2-.1-.05-.07h.44l.21.06h.25l.11-.06.09-.14-.03-.03-.13.08-.03-.05.08-.1-.02-.28.09-.1h.1l.04.12-.04.1.1.07.06-.2v-.11l.1-.05.04.1h.11l.07-.06.01-.18-.07-.03-.18.05h-.21l-.07.09-.14.08h-.15l-.11.09-.04-.11-.1-.05-.07-.11.03-.14.34.12.13-.04.17-.09.2.02.17-.05-.07-.15-.23-.14-.37-.14-.04-.14.27.02-.07-.12-.13-.06h-.2l-.14-.06-.08-.22.1-.02.08.04.28.1.34.22.2.08.23.03.41-.06-.06-.07h-.18l.03-.09.11-.1.08.08.23-.13.04.08.24.04-.03.11h.14l.46-.09-.06.07.11.06h.12l.25-.08-.13-.11v-.14l.07-.07.11.04.03.04.26.1-.05.2.04.02-.18.15-.1-.02v.1l-.05.22-.1.1-.07-.04-.15.03-.14.1-.03.13zm-.66-1.44-.05.11h-.16l-.1-.14.12-.02zm-.68.3-.17.02-.13-.1.1-.07.11-.02.12.1.07-.1-.22-.08.03-.06h.34l.06.15-.2.19zm5.86.98-.11.11-.22.02-.1.06-.39.05-.29.11.02.04.14.04-.24.09-.31.14-.23-.03-.22.03h-.4l-.25-.12-.23-.17-.05.13.09.1.1.04.2.1.08.14.14-.04.17.04.07.04.07.11-.13.07.04.28h-.08l-.14-.19-.16-.05-.16.02.02.08-.19.12-.06-.15-.07.03-.04-.12h-.15l-.2-.15-.16.08-.12-.06-.14.07.29.06.02.12h.17l.05.14-.14.06.08.08.15-.04.02.06-.13.07.12.12-.08.07-.17-.08h-.18l-.1-.16-.16-.05-.14-.12-.04.14-.11.03.08.1-.06.07.22.1v.11l-.12.12-.18-.05-.04-.11-.08-.06-.11-.02-.02-.15h-.13v-.06l-.22-.2.02-.07.11.08.05-.12h.1l.07-.09-.14-.09.07-.04.02-.11.12-.04-.15-.1.05-.1.23.08.05-.04-.13-.12.13-.08v-.09l.18-.05h.08l.04-.15.16.03-.05-.12.24-.14.04.04.11-.09.2-.02.1.22-.04.22.16-.1-.07-.16v-.1l-.06-.06.1-.14-.28-.1-.17-.15.12-.12.03-.12.12.2.08.07.06-.09-.08-.15.07-.06-.28-.11.03-.11.07-.06.09.04.13-.03.02-.08h.17l.12-.04v-.1l-.1-.14.03-.08.2.07.21.1.3-.01.1-.07h.22l.2.07.15.15.03.15-.07.08-.22.02-.07-.15-.08-.03-.1.14.1.04v.17l.16-.08.07.05-.01.2.09-.03.05.09.1-.06.08.06.04.15.24-.09-.15-.09.02-.12h-.14v-.09l-.12-.04.11-.2.16-.1.53-.03.13-.03h.14l.05.06.05.14.11.14.14.06v.11l-.1.07-.3-.03-.22-.12-.33.12.14.1.15.07.15-.03.07.04.22.02.18.07-.01.1-.28.06zm-4.8-1.34-.14-.04.1-.11.18.07.25-.03.07.12.14-.1.12.07.02.14-.11.04-.2-.02-.15-.13zm-.06 3.45.11-.08.04.1-.02.12.16-.04.03.04-.14.13-.3-.17zm3.37-1.1.01.08-.06.11.03.16-.23-.12-.08-.13.08-.05zm-3.3-2.2.13.1.13.01.03.06-.17.08-.14-.03-.06-.17zm-1.97-.15h-.13v-.1zm-1.3-.71-.18-.01.06-.12z"
          fill="#d1dbdd"
          stroke="#000"
          strokeWidth=".15"
          id="Falkland_Islands"
          fill-opacity="1"
          stroke-miterlimit="4"
          stroke-dasharray="none"
          stroke-opacity="1"
          data-originalStrokeWidth="0.15"
          style={{
            fill: 'rgb(209, 219, 221)',
            stroke: 'rgb(0, 0, 0)',
          }}
        ></path>
      </g>
      {zoomIn !== 'africa' && (
        <Africa
          handleZoom={handleZoom}
          className={styles.africa__zoom__out}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn !== 'asia' && (
        <Asia
          handleZoom={handleZoom}
          className={styles.asia__zoom__out}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn !== 'centralAmerica' && (
        <CentralAmerica
          handleZoom={handleZoom}
          className={styles.ca__zoom__out}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn !== 'europe' && (
        <Europe
          handleZoom={handleZoom}
          className={styles.europe__zoom__out}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn !== 'middleEast' && (
        <MiddleEast
          handleZoom={handleZoom}
          className={styles.middle__east__zoom__out}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn !== 'northAmerica' && (
        <NorthAmerica
          handleZoom={handleZoom}
          className={styles.na__zoom__out}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn !== 'oceania' && (
        <Oceania
          handleZoom={handleZoom}
          className={styles.oceania__zoom__out}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn !== 'southAmerica' && (
        <SouthAmerica
          handleZoom={handleZoom}
          className={styles.sa__zoom__out}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn !== 'urals' && (
        <Russia
          handleZoom={handleZoom}
          className={styles.urals__zoom__out}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {/* <g id="portal-container" ref={lastChild}></g> */}
      {zoomIn === 'africa' && (
        <Africa
          handleZoom={handleZoom}
          className={styles.africa__zoom__in}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn === 'asia' && (
        <Asia
          handleZoom={handleZoom}
          className={styles.asia__zoom__in}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn === 'centralAmerica' && (
        <CentralAmerica
          handleZoom={handleZoom}
          className={styles.ca__zoom__in}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn === 'europe' && (
        <Europe
          handleZoom={handleZoom}
          className={styles.europe__zoom__in}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn === 'middleEast' && (
        <MiddleEast
          handleZoom={handleZoom}
          className={styles.middle__east__zoom__in}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn === 'northAmerica' && (
        <NorthAmerica
          handleZoom={handleZoom}
          className={styles.na__zoom__in}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn === 'oceania' && (
        <Oceania
          handleZoom={handleZoom}
          className={styles.oceania__zoom__in}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn === 'southAmerica' && (
        <SouthAmerica
          handleZoom={handleZoom}
          className={styles['sa__zoom__in']}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
      {zoomIn === 'urals' && (
        <Russia
          handleZoom={handleZoom}
          className={styles.urals__zoom__in}
          zoomIn={zoomIn}
          countryId={countryId}
          answers={answers}
        />
      )}
    </>
  );
};

export default Countries;
