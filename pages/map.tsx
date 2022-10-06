import type { NextPage } from 'next';
import Layout from '../components/Layout';
import MyMap3 from '../components/MyMap3';

const Map = () => {
  return (
    <Layout>
      <MyMap3 />
    </Layout>
  );
};

Map.auth = false;

export default Map;
