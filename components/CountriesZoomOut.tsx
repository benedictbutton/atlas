import { SetStateAction, MouseEvent, useRef } from 'react';
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

const CountriesZoomOut = ({
  zoomIn,
  handleZoom,
  countryId,
  answers,
}: CountryProps) => {
  // const lastChild = useRef<SVGGElement | null>(null);

  return (
    <>
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
    </>
  );
};

export default CountriesZoomOut;
