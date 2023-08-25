const ArmLabels = ({ answers, zoomIn, className }) => {
  return (
    <g className={className}>
      <g
        style={{
          display:
            (answers['clavicle'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'arm')
              ? 'none'
              : '',
        }}
      >
        <text
          x="325.12314"
          y="150.85573"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="325.12314" y="149.85573">
            clavicle (2)
          </tspan>
        </text>
        <line
          x1="249.95"
          x2="338.5"
          y1="151.68"
          y2="151.68"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle
          cx="249.95"
          cy="151.68"
          r={zoomIn === 'arm' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['scapula'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'arm')
              ? 'none'
              : '',
        }}
      >
        <text
          x="323.76587"
          y="180.05397"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="323.76587" y="180.05397">
            scapula (2)
          </tspan>
        </text>
        <line
          x1="266.17"
          x2="338.79"
          y1="181.03"
          y2="181.03"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle
          cx="266.17"
          cy="181.038"
          r={zoomIn === 'arm' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['humerus'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'arm')
              ? 'none'
              : '',
        }}
      >
        <text
          x="352.18713"
          y="291.48712"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="335.18713" y="285.48712">
            humerus (2)
          </tspan>
        </text>
        <line
          x1="314.82"
          x2="349.2"
          y1="288"
          y2="288"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle
          cx="314.82"
          cy="288"
          r={zoomIn === 'arm' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['ulna'] ?? 0) < 1 || (zoomIn && zoomIn !== 'arm')
              ? 'none'
              : '',
        }}
      >
        <text
          x="366.97925"
          y="328.39273"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="366.97925" y="328.39273">
            ulna (2)
          </tspan>
        </text>
        <line
          x1="318.05"
          x2="379.74"
          y1="330.35"
          y2="330.35"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle
          cx="318.05"
          cy="330.35"
          r={zoomIn === 'arm' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['radius'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'arm')
              ? 'none'
              : '',
        }}
      >
        <text
          x="366.79825"
          y="341.6731"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="366.79825" y="341.6731">
            radius (2)
          </tspan>
        </text>
        <line
          x1="337.16"
          x2="380.29"
          y1="343.31"
          y2="343.31"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle
          cx="337.16"
          cy="343.31"
          r={zoomIn === 'arm' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
    </g>
  );
};

export default ArmLabels;
