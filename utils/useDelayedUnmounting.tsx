import { useState, useEffect } from 'react';

const useDelayedUnmounting = (isMounted: boolean, delay = 5000) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined;

    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delay);
    }

    return () => clearTimeout(timeoutId);
  }, [delay, isMounted, shouldRender]);

  return shouldRender;
};

export default useDelayedUnmounting;
