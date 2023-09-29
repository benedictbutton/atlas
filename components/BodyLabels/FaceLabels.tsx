const FaceLabels = ({
  answers,
  zoomIn,
  className,
}: BodyLabelProps) => {
  return (
    <g className={className}>
      <g
        style={{
          display:
            (answers['mandible'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'face')
              ? 'none'
              : '',
        }}
      >
        <text
          x="259.1376"
          y="124.91109"
          dy={zoomIn === 'face' ? '-.2%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="261.1376" y="127.91109">
            mandible
          </tspan>
        </text>
        <line
          x1="206.84"
          x2="260.35"
          y1="118.84"
          y2="124.84"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="206.84" cy="118.84" r=".7" fill="#003cff" />
      </g>
      <g
        style={{
          display:
            (answers['maxilla'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'face')
              ? 'none'
              : '',
        }}
      >
        <text
          x="259"
          y="115"
          dx={zoomIn === 'face' ? '-.2%' : ''}
          dy={zoomIn === 'face' ? '-.2%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="259" y="115">
            maxilla (2)
          </tspan>
        </text>
        <line
          x1="210.84"
          x2="257"
          y1="97"
          y2="112"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="210.84" cy="97" r=".7" fill="#003cff" />
      </g>
      <g
        style={{
          display:
            (answers['vomer'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'face')
              ? 'none'
              : '',
        }}
      >
        <text
          x="259.1376"
          y="101"
          dy={zoomIn === 'face' ? '-.2%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="259.1376" y="101">
            vomer
          </tspan>
        </text>
        <line
          x1="202.84"
          x2="258"
          y1="88"
          y2="98"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="202.84" cy="88" r="0.766" fill="#003cff" />
      </g>
      <g
        style={{
          display:
            (answers['zygomatic'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'face')
              ? 'none'
              : '',
        }}
      >
        <text
          x="259.1376"
          y="89"
          dy={zoomIn === 'face' ? '-.2%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="259.1376" y="89">
            zygomatic (2)
          </tspan>
        </text>
        <line
          x1="230"
          x2="259"
          y1="86"
          y2="86"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="230" cy="86" r="0.7" fill="#003cff" />
      </g>
      <g
        style={{
          display:
            (answers['inferior nasal concha'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'face')
              ? 'none'
              : '',
        }}
      >
        <text
          x="85"
          y="79"
          fill="#000000"
          font-family="Arial"
          font-size="10px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan
            x="88"
            y="79"
            dx={zoomIn === 'face' ? '6%' : ''}
            dy={zoomIn === 'face' ? '-.1%' : ''}
          >
            inferior nasal
          </tspan>
          <tspan
            x="88"
            y="90"
            dx={zoomIn === 'face' ? '6%' : ''}
            dy={zoomIn === 'face' ? '-.5%' : ''}
          >
            concha (2)
          </tspan>
        </text>
        <line
          x1="140"
          x2="198"
          y1="83"
          y2="87.5"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="198" cy="87.5" r="0.566" fill="#003cff" />
      </g>
      <g
        style={{
          display:
            (answers['palatine'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'face')
              ? 'none'
              : '',
        }}
      >
        <text
          x="259"
          y="78"
          dy={zoomIn === 'face' ? '-.2%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="259" y="78">
            palatine (2)
          </tspan>
        </text>
        <line
          x1="257"
          x2="206"
          y1="75"
          y2="82"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="206" cy="82" r="0.566" fill="#003cff" />
      </g>
      <g
        style={{
          display:
            (answers['nasal'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'face')
              ? 'none'
              : '',
        }}
      >
        <text
          x="259"
          y="67"
          dy={zoomIn === 'face' ? '-.2%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="259" y="67">
            nasal (2)
          </tspan>
        </text>
        <line
          x1="258"
          x2="204"
          y1="64"
          y2="70"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="204" cy="70" r=".7" fill="#003cff" />
      </g>
    </g>
  );
};

export default FaceLabels;
