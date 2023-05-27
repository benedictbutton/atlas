import { createPortal } from 'react-dom';

const CountryGrouping = ({
  children,
  lastChild,
  zoomInContinent,
}) => {
  return null;
  // <>
  //   {!zoomInContinent && <>{children}</>}
  //   {zoomInContinent &&
  //     createPortal(<>{children}</>, lastChild.current)}
  // </>
};

export default CountryGrouping;
