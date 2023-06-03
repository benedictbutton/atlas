import React, { MutableRefObject, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: React.ReactNode;
  lastChild: SVGGElement | null;
};

const CountryNames = ({ children, lastChild }: Props) => {
  const [hideName, setHideName] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleName = () => {
    setHideName(!hideName);
  };

  const renderChildren = () => {
    const cloned = React.Children.map(children, (child) => {
      if (child.type === 'g') {
        return React.cloneElement(child, {
          key: child.props.id,
          onClick: () => {
            handleName();
          },
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
