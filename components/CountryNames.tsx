import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import useMountTransition from '../utils/useMountTransition';

const CountryNames = ({ children, lastChild }) => {
  const [hideName, setHideName] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const [isMountedPortal, setIsMountedPortal] = useState(false);
  const hasTransitionedIn = useMountTransition(isMounted, 1000);
  const hasTransitionedInPortal = useMountTransition(
    isMountedPortal,
    1000,
  );

  const handleName = () => {
    setHideName((prevState) => !prevState);
  };

  console.log('isOpen: ', isOpen);
  console.log('isMounted: ', isMounted);
  console.log('hasTransitionedIn: ', hasTransitionedIn);

  const renderChildren = () => {
    const cloned = React.Children.map(children, (child) => {
      if (child.type === 'g') {
        return React.cloneElement(child, {
          key: child.props.id,
          onClick: () => {
            handleName();
            setIsOpen(!isOpen);
            setIsMounted(!isMounted);
            setIsMountedPortal(!isMountedPortal);
          },
          className: `${isOpen ? 'non-portal' : 'portal'} ${
            isMounted && hasTransitionedIn && 'zoom-out'
          } ${
            isMountedPortal && hasTransitionedInPortal && 'zoom-in'
          } `,
        });
      }
      return child;
    });

    return cloned;
  };

  return (
    <>
      {isOpen && <>{renderChildren()}</>}
      {!isOpen &&
        createPortal(<>{renderChildren()}</>, lastChild.current)}
    </>
  );
};

export default CountryNames;
