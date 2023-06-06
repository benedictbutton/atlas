import { useState, useEffect, useCallback } from 'react';

const useDelayedUnmounting = (time = 5000) => {
  const [state, setState] = useState('unmounted');
  const show = useCallback(() => {
    // debugger;
    if (state === 'unmounting') {
      return;
    }
    setState('mounting');
  }, [state]);

  const hide = useCallback(() => {
    if (state === 'mounting') {
      return;
    }
    setState('unmounting');
  }, [state]);

  useEffect(() => {
    let timeoutId;
    if (state === 'unmounting') {
      timeoutId = setTimeout(() => {
        setState('unmounted');
      }, time);
    } else if (state === 'mounting') {
      timeoutId = setTimeout(() => {
        setState('mounted');
      }, time);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [state, time]);

  console.log('test: ', state);

  return [state, show, hide];
};

export default useDelayedUnmounting;
