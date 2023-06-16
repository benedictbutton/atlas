import type { NextPage } from 'next';
import WorldMap from '../components/WorldMap';

const Map = () => {
  return <WorldMap />;
};

Map.auth = true;

export default Map;
