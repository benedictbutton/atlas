import React, { useState, useCallback } from 'react';

// const CountryNames = (props) => {
//   const [hideName, setHideName] = useState(true);

//   const handleName = (e, name) => {
//     debugger;
//     setHideName(!name);
//   };
//   const renderChildren = () => {
//     return React.Children.map(props.children, (child) => {
//       return React.cloneElement(child, {
//         key: props.id,
//         setHideName: setHideName,
//         hideName: hideName,
//       });
//     });
//   };

//   return <>{renderChildren()}</>;
// };

// const CountryNames = (props) => {
//   const [hideName, setHideName] = useState(true);

//   const handleName = (e, name) => {
//     debugger;
//     setHideName(!name);
//   };
//   const renderChildren = () => {
//     return React.Children.map(props.children, (child) => {
//       return React.cloneElement(child, {
//         key: props.id,
//         setHideName: setHideName,
//         hideName: hideName,
//       });
//     });
//   };

//   return <>{renderChildren()}</>;
// };

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
