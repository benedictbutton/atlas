import { useState, useMemo, useEffect } from 'react';

const useZoom = () => {
  const [zoomIn, setZoomIn] = useState('');

  const findRegion = useMemo(() => {
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
      case 'northAmerica':
        region = 'North America';
        break;
      case 'urals':
        region = 'Eastern Europe, Volga, & the Urals';
        break;
      case 'centralAmerica':
        region = 'Central America & the Carribean';
        break;
      default:
        region = '';
        break;
    }
    return region;
  }, [zoomIn]);

  const [regionHeader, setRegionHeader] = useState(findRegion);

  useEffect(() => {
    setRegionHeader(findRegion);
  }, [zoomIn, findRegion]);

  return [regionHeader, zoomIn, setZoomIn] as const;
};

export default useZoom;
