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

const CountriesZoomIn = ({
  zoomIn,
  handleZoom,
  countryId,
  answers,
}: CountryProps) => {
  return (
    <>
      {zoomIn === 'africa' && (
        <svg
          className={`${styles.region__zoom__in} absolute top-0 h-full z-5`}
          version="1.2"
          width="100%"
          height="auto"
          stroke-linecap="round"
          stroke-linejoin="round"
          id="map"
          xmlns="http:/'/',ww.w3.org/2000/sg"
          viewBox="0 0 895.92 471.76"
        >
          <Africa
            handleZoom={handleZoom}
            className={styles.africa__zoom__in}
            zoomIn={zoomIn}
            countryId={countryId}
            answers={answers}
          />
        </svg>
      )}
      {zoomIn === 'asia' && (
        <svg
          className={`${styles.region__zoom__in} absolute top-0 h-full z-5`}
          version="1.2"
          width="100%"
          height="auto"
          stroke-linecap="round"
          stroke-linejoin="round"
          id="map"
          xmlns="http:/'/',ww.w3.org/2000/sg"
          viewBox="0 0 895.92 471.76"
        >
          <Asia
            handleZoom={handleZoom}
            className={styles.asia__zoom__in}
            zoomIn={zoomIn}
            countryId={countryId}
            answers={answers}
          />
        </svg>
      )}
      {zoomIn === 'centralAmerica' && (
        <svg
          className={`${styles.region__zoom__in} absolute top-0 h-full z-5`}
          version="1.2"
          width="100%"
          height="auto"
          stroke-linecap="round"
          stroke-linejoin="round"
          id="map"
          xmlns="http:/'/',ww.w3.org/2000/sg"
          viewBox="0 0 895.92 471.76"
        >
          <CentralAmerica
            handleZoom={handleZoom}
            className={styles.ca__zoom__in}
            zoomIn={zoomIn}
            countryId={countryId}
            answers={answers}
          />
        </svg>
      )}
      {zoomIn === 'europe' && (
        <svg
          className={`${styles.region__zoom__in} absolute top-0 h-full z-5`}
          version="1.2"
          width="100%"
          height="auto"
          stroke-linecap="round"
          stroke-linejoin="round"
          id="map"
          xmlns="http:/'/',ww.w3.org/2000/sg"
          viewBox="0 0 895.92 471.76"
        >
          <Europe
            handleZoom={handleZoom}
            className={styles.europe__zoom__in}
            zoomIn={zoomIn}
            countryId={countryId}
            answers={answers}
          />
        </svg>
      )}
      {zoomIn === 'middleEast' && (
        <svg
          className={`${styles.region__zoom__in} absolute top-0 h-full z-5`}
          version="1.2"
          width="100%"
          height="auto"
          stroke-linecap="round"
          stroke-linejoin="round"
          id="map"
          xmlns="http:/'/',ww.w3.org/2000/sg"
          viewBox="0 0 895.92 471.76"
        >
          <MiddleEast
            handleZoom={handleZoom}
            className={styles.middle__east__zoom__in}
            zoomIn={zoomIn}
            countryId={countryId}
            answers={answers}
          />
        </svg>
      )}
      {zoomIn === 'northAmerica' && (
        <svg
          className={`${styles.region__zoom__in} absolute top-0 h-full z-5`}
          version="1.2"
          width="100%"
          height="auto"
          stroke-linecap="round"
          stroke-linejoin="round"
          id="map"
          xmlns="http:/'/',ww.w3.org/2000/sg"
          viewBox="0 0 895.92 471.76"
        >
          <NorthAmerica
            handleZoom={handleZoom}
            className={styles.na__zoom__in}
            zoomIn={zoomIn}
            countryId={countryId}
            answers={answers}
          />
        </svg>
      )}
      {zoomIn === 'oceania' && (
        <svg
          className={`${styles.region__zoom__in} absolute top-0 h-full z-5`}
          version="1.2"
          width="100%"
          height="auto"
          stroke-linecap="round"
          stroke-linejoin="round"
          id="map"
          xmlns="http:/'/',ww.w3.org/2000/sg"
          viewBox="0 0 895.92 471.76"
        >
          <Oceania
            handleZoom={handleZoom}
            className={styles.oceania__zoom__in}
            zoomIn={zoomIn}
            countryId={countryId}
            answers={answers}
          />
        </svg>
      )}
      {zoomIn === 'southAmerica' && (
        <svg
          className={`${styles.region__zoom__in} absolute top-0 h-full z-5`}
          version="1.2"
          width="100%"
          height="auto"
          stroke-linecap="round"
          stroke-linejoin="round"
          id="map"
          xmlns="http:/'/',ww.w3.org/2000/sg"
          viewBox="0 0 895.92 471.76"
        >
          <SouthAmerica
            handleZoom={handleZoom}
            className={styles['sa__zoom__in']}
            zoomIn={zoomIn}
            countryId={countryId}
            answers={answers}
          />
        </svg>
      )}
      {zoomIn === 'urals' && (
        <svg
          className={`${styles.region__zoom__in} absolute top-0 h-full z-5`}
          version="1.2"
          width="100%"
          height="auto"
          stroke-linecap="round"
          stroke-linejoin="round"
          id="map"
          xmlns="http:/'/',ww.w3.org/2000/sg"
          viewBox="0 0 895.92 471.76"
        >
          <Russia
            handleZoom={handleZoom}
            className={styles.urals__zoom__in}
            zoomIn={zoomIn}
            countryId={countryId}
            answers={answers}
          />
        </svg>
      )}
    </>
  );
};

export default CountriesZoomIn;
