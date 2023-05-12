import type { NextPage } from 'next';
import Layout from '../components/Layout';
import MyMap3 from '../components/MyMap3';

const Map = () => {
  return <MyMap3 />;
};

Map.auth = true;

export default Map;
