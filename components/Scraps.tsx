zoomInSetting,
portalClassName,
nonPortalClassName,

const [zoomInContinent, setZoomInContinent] = useState(false);
const [isMounted, setIsMounted] = useState(true);
const [isMountedPortal, setIsMountedPortal] = useState(false);
const hasTransitionedIn = useMountTransition(isMounted, 1000);
const hasTransitionedInPortal = useMountTransition(
  isMountedPortal,
  1000,
);

<CountryGrouping
      lastChild={lastChild}
      zoomInContinent={zoomInContinent}
    >
      <g
        onClick={(e) => {
          if (zoomInContinent) return;
          e.stopPropagation();
          setZoomInContinent(true);
          setIsMounted(!isMounted);
          setIsMountedPortal(!isMountedPortal);
        }}
        style={{
          transition: 'all 2s ease-in-out 2s',
          transform:
            (isMounted && hasTransitionedIn && 'scale(1)') ||
            (isMountedPortal &&
              hasTransitionedInPortal &&
              zoomInSetting),
        }}
        className={
          !zoomInContinent ? nonPortalClassName : portalClassName
        }
      ></g></CountryGrouping





    