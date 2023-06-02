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

'g4006'
'g3941'
'g3891'
'g3986'
'g3976'
'g3951'
'g3946'
'g3956'
'g4001'
'g3936'
'g3926'
'g3921'
'g3966'
'g3996'
'g3981'
'g4011'
'g3991'
'g3906'
'g3876'
'g3971'
'g3901'
'g3886'
'g3931'
'g3871'
'g4031'
'g3916'
'g3911'


'g3238'
'g3233'
'g3208'
'g3193'
'g3223'
'g3203'
'g3198'
'g3228'
'g3218'
'g3188'
'g3183'
'g3213'
'g3244'