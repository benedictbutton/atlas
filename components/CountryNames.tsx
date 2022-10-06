import React, { useState, useCallback } from 'react';

const CountryNames = ({ id, children }) => {
  const [hideName, setHideName] = useState(false);

  return (
    <g
      key={id}
      className={hideName ? 'country' : ''}
      onClick={() => setHideName(!hideName)}
    >
      {children}
    </g>
  );
};

export default CountryNames;
