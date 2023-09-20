import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SignOut from './Authentication/SignOut';
import styles from '../styles/Profile.module.css';

const Profile = ({
  profileIcon,
  iconSize,
  textColor,
  menuItemLink,
  menuItemName,
  menuItemColor,
  zoomIn,
}: ProfileProps) => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <div
        className={`${styles.profile} text-${textColor} absolute top-0 right-0 py-4 z-20`}
        aria-hidden={hidden}
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
      >
        <div className="flex justify-center items-center w-full">
          <p
            className={`${
              !!zoomIn ? 'text-white' : ''
            } text-md md:text-xl mr-2`}
          >
            Profile
          </p>
          <div className="relative">
            <Image
              src={profileIcon}
              alt="profile button"
              width={iconSize}
              height={iconSize}
            />
          </div>
        </div>
        {!hidden && (
          <>
            <div className="w-3/4 h-2 mx-auto border-b-2 border-solid border-[#1b83ff]" />
            <div className="flex flex-col h-5/6 justify-between">
              <div
                className={`text-lg ${menuItemColor} text-center mt-3`}
              >
                <Link href={menuItemLink}>{menuItemName}</Link>
              </div>
              <SignOut />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
