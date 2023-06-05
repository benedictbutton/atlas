import type { NextPage } from 'next';
import Layout from '../components/Layout';
import WorldMap from '../components/WorldMap';

const Map = () => {
  return <WorldMap />;
};

Map.auth = true;

export default Map;
