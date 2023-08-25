const FootLabels = ({ answers, zoomIn, className }) => {
  return (
    <g className={className}>
      <g
        style={{
          display:
            (answers['foot distal'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'foot')
              ? 'none'
              : '',
        }}
      >
        <text
          x="23"
          y="815.99307"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          dx={zoomIn === 'foot' ? '11.15%' : ''}
          dy={zoomIn === 'foot' ? '-.15%' : ''}
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="23" y="815.99307">
            distal phalanx (10)
          </tspan>
        </text>
        <line
          x1="114"
          x2="131"
          y1="813"
          y2="807"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="131"
          cy="807"
          r={zoomIn === 'foot' ? '.566' : '.566'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['foot middle'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'foot')
              ? 'none'
              : '',
        }}
      >
        <text
          x="23"
          y="802.99307"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          dx={zoomIn === 'foot' ? '12%' : ''}
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="23" y="802.99307">
            middle phalanx (10)
          </tspan>
        </text>
        <line
          x1="120"
          x2="133"
          y1="802"
          y2="803.5"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="133"
          cy="803.5"
          r={zoomIn === 'foot' ? '.566' : '.566'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['foot proximal'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'foot')
              ? 'none'
              : '',
        }}
      >
        <text
          x="19"
          y="788.99307"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          dx={zoomIn === 'foot' ? '13%' : ''}
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="19" y="788.99307">
            proximal phalanx (10)
          </tspan>
        </text>
        <line
          x1="125"
          x2="140"
          y1="789"
          y2="797"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="140"
          cy="797"
          r={zoomIn === 'foot' ? '.566' : '.566'}
          fill="#003cff"
        />
      </g>
    </g>
  );
};
export default FootLabels;
