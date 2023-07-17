import { useState } from 'react';
import Image from 'next/image';
import SignOut from './Authentication/SignOut';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <div
        className={`${styles.profile} absolute top-0 right-0 py-4 z-20`}
        aria-hidden={hidden}
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
      >
        <div className="flex justify-center items-center w-full">
          <p className="text-md md:text-xl mr-2">Profile</p>
          <div className="relative h-9">
            <Image
              src="/earth.png"
              alt="profile button"
              width="36px"
              height="36px"
            />
          </div>
        </div>
        {!hidden && (
          <>
            <div className="w-3/4 h-2 mx-auto border-b-2 border-solid border-[#1b83ff]" />
            <SignOut />
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
