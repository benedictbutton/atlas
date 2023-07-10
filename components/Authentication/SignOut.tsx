import { signOut } from 'next-auth/react';
import styles from '../../styles/SignOut.module.css';

const SignOut = () => {
  return (
    <button
      className={`${styles.box} w-3/4 h-12 mx-auto text-lg`}
      onClick={() => signOut({ callbackUrl: '/signin' })}
    >
      Sign Out
    </button>
  );
};

export default SignOut;
