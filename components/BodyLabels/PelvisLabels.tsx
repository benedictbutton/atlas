const PelvisLabels = ({
  answers,
  zoomIn,
  className,
}: BodyLabelProps) => {
  return (
    <g className={className}>
      <g
        style={{
          display:
            (answers['hip'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'pelvis')
              ? 'none'
              : '',
        }}
      >
        <text
          x="280"
          y="372.05472"
          dx={zoomIn === 'hip' ? '5%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{
            lineHeight: '125%',
          }}
          xmlSpace="preserve"
        >
          <tspan x="280" y="372.05472">
            hip
          </tspan>
        </text>
        <line
          x1="250"
          x2={zoomIn === 'hip' ? '280' : '285'}
          y1="375.15"
          y2="375.15"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle
          cx="250.89"
          cy="375.15"
          r={zoomIn === 'pelvis' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['sacrum'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'pelvis')
              ? 'none'
              : '',
        }}
      >
        <text
          x="100"
          y="370.29971"
          dx={zoomIn === 'pelvis' ? '1.5%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="100" y="370.29971">
            sacrum
          </tspan>
        </text>
        <line
          x1="119"
          x2="197.04"
          y1="372.25"
          y2="372.25"
          fill="none"
          stroke="#003cf9"
          stroke-width=".546"
        />
        <circle cx="197.04" cy="372.25" r="1.166" fill="#003cf9" />
      </g>
      <g
        style={{
          display:
            (answers['coccyx'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'pelvis')
              ? 'none'
              : '',
        }}
      >
        <text
          x="100"
          y="385.20505"
          dx={zoomIn === 'pelvis' ? '1.5%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="100" y="385.20505">
            coccyx
          </tspan>
        </text>
        <line
          x1="119"
          x2="202.09"
          y1="386.61"
          y2="386.61"
          fill="none"
          stroke="#003cf9"
          stroke-width=".546"
        />
        <circle cx="202.09" cy="386.61" r="1.166" fill="#003cf9" />
      </g>
    </g>
  );
};

export default PelvisLabels;
