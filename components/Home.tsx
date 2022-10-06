import { signOut } from 'next-auth/react';
import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <h1>I&apos;M IN!!!</h1>
      <button
        className="bg-blue-900 text-white p-2"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </Layout>
  );
};

export default Home;
