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
          y="825.99307"
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
          <tspan x="23" y="825.99307">
            distal phalanx (10)
          </tspan>
        </text>
        <line
          x1="114"
          x2="130"
          y1="822"
          y2="809"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="130"
          cy="809"
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
          x="27"
          y="812.99307"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          dx={zoomIn === 'foot' ? '11.5%' : ''}
          dy={zoomIn === 'foot' ? '-.25%' : ''}
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="27" y="812.99307">
            middle phalanx (8)
          </tspan>
        </text>
        <line
          x1="119"
          x2="133"
          y1="809"
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
          y="798.99307"
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
          <tspan x="19" y="798.99307">
            proximal phalanx (10)
          </tspan>
        </text>
        <line
          x1="125"
          x2="140"
          y1="797"
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
      <g
        style={{
          display:
            (answers['metatarsal'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'foot')
              ? 'none'
              : '',
        }}
      >
        <text
          x="53"
          y="783.99307"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          dx={zoomIn === 'foot' ? '9.25%' : ''}
          dy={zoomIn === 'foot' ? '-.25%' : ''}
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="53" y="783.99307">
            metatarsal (10)
          </tspan>
        </text>
        <line
          x1="128"
          x2="154"
          y1="781"
          y2="781"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="154"
          cy="781"
          r={zoomIn === 'foot' ? '.566' : '.566'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['metatarsal'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'foot')
              ? 'none'
              : '',
        }}
      >
        <text
          x="85"
          y="769.99307"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          dx={zoomIn === 'foot' ? '6%' : ''}
          dy={zoomIn === 'foot' ? '-.15%' : ''}
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="85" y="769.99307">
            cuboid (2)
          </tspan>
        </text>
        <line
          x1="135"
          x2="168"
          y1="768"
          y2="772"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="168"
          cy="772"
          r={zoomIn === 'foot' ? '.566' : '.566'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['metatarsal'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'foot')
              ? 'none'
              : '',
        }}
      >
        <text
          x="100"
          y="754.99307"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          dx={zoomIn === 'foot' ? '5%' : ''}
          dy={zoomIn === 'foot' ? '0.15%' : ''}
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="100" y="754.99307">
            talus (2)
          </tspan>
        </text>
        <line
          x1="141"
          x2="171"
          y1="755"
          y2="768"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="171"
          cy="768"
          r={zoomIn === 'foot' ? '.566' : '.566'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['navicular'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'foot')
              ? 'none'
              : '',
        }}
      >
        <text
          x="170"
          y="754.99307"
          fill="#000000"
          font-family="Arial"
          font-size="9px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="170" y="754.99307">
            navicular (2)
          </tspan>
        </text>
        <line
          x1="180"
          x2="180"
          y1="756"
          y2="768"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="180"
          cy="768"
          r={zoomIn === 'foot' ? '.566' : '.566'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['lateral cuneiform'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'foot')
              ? 'none'
              : '',
        }}
      >
        <text
          x="155"
          y="830.99307"
          fill="#000000"
          font-family="Arial"
          font-size="8.5px"
          dy={zoomIn === 'foot' ? '-0.35%' : ''}
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="155" y="830.99307">
            lateral cuneiform (2)
          </tspan>
        </text>
        <line
          x1="172"
          x2="161"
          y1="775"
          y2="824"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="172"
          cy="775"
          r={zoomIn === 'foot' ? '.566' : '.566'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['middle cuneiform'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'foot')
              ? 'none'
              : '',
        }}
      >
        <text
          x="165"
          y="820.99307"
          dy={zoomIn === 'foot' ? '-0.15%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="8px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="165" y="820.99307">
            middle cuneiform (2)
          </tspan>
        </text>
        <line
          x1="180"
          x2="172"
          y1="776"
          y2="815"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="180"
          cy="776"
          r={zoomIn === 'foot' ? '.566' : '.566'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['medial cuneiform'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'foot')
              ? 'none'
              : '',
        }}
      >
        <text
          x="165"
          y="820.99307"
          fill="#000000"
          font-family="Arial"
          font-size="8px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="175" y="809.99307">
            medial cuneiform (2)
          </tspan>
        </text>
        <line
          x1="184"
          x2="184"
          y1="780"
          y2="805"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="184"
          cy="780"
          r={zoomIn === 'foot' ? '.566' : '.566'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display: (answers['calcaneus'] ?? 0) < 1 ? 'none' : '',
        }}
      >
        <text
          x="75"
          y="850"
          fill="#000000"
          font-family="Arial"
          font-size="5px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="82" y="850">
            calcaneus (2)
          </tspan>
        </text>
        <line
          x1="115"
          x2="125"
          y1="850"
          y2="857"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="125"
          cy="857"
          r={zoomIn === 'foot' ? '.566' : '.566'}
          fill="#003cff"
        />
      </g>
    </g>
  );
};
export default FootLabels;
