import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.landing}>
          <h1 className={styles.title}>Welcome to Atlas!</h1>
          <div className="flex">
            <div className="w-24 my-2 ml-2 mr-4 p-2 bg-indigo-500 rounded-xl text-white text-center">
              <Link href="/signin">Sign In</Link>
            </div>
            <div className="w-24 m-2 p-2 bg-indigo-500 rounded-xl text-white text-center">
              <Link href="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
