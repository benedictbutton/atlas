const HandLabels = ({ answers, zoomIn, className }) => {
  return (
    <g className={className}>
      <g
        style={{
          display:
            (answers['distal phalanx'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'hand')
              ? 'none'
              : '',
        }}
      >
        <text
          x="-45"
          y="495.99307"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          dx={zoomIn === 'hand' ? '11.5%' : ''}
          dy={zoomIn === 'hand' ? '-.15%' : ''}
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="-45" y="494.99307">
            distal phalanx (10)
          </tspan>
        </text>
        <line
          x1="47"
          x2="69"
          y1="492"
          y2="482"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="69"
          cy="482"
          r={zoomIn === 'hand' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['middle phalanx'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'hand')
              ? 'none'
              : '',
        }}
      >
        <text
          x="-50"
          y="479.99307"
          dx={zoomIn === 'hand' ? '12.5%' : ''}
          dy={zoomIn === 'hand' ? '-.25%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="-50" y="479.99307">
            middle phalanx (10)
          </tspan>
        </text>
        <line
          x1="49"
          x2="68"
          y1="476"
          y2="473"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="68"
          cy="473"
          r={zoomIn === 'hand' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['proximal phalanx'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'hand')
              ? 'none'
              : '',
        }}
      >
        <text
          x="-53"
          y="466.99307"
          dx={zoomIn === 'hand' ? '12.75%' : ''}
          dy={zoomIn === 'hand' ? '-.25%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="-53" y="466.99307">
            proximal phalanx (8)
          </tspan>
        </text>
        <line
          x1="49"
          x2="65"
          y1="464"
          y2="463"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="65"
          cy="463"
          r={zoomIn === 'hand' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['metacarpal'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'hand')
              ? 'none'
              : '',
        }}
      >
        <text
          x="-30"
          y="454.99307"
          dx={zoomIn === 'hand' ? '9.5%' : ''}
          dy={zoomIn === 'hand' ? '-.25%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="-30" y="454.99307">
            metacarpal (10)
          </tspan>
        </text>
        <line
          x1="49"
          x2="64.5"
          y1="451"
          y2="445"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="64.5"
          cy="445"
          r={zoomIn === 'hand' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['harnate'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'hand')
              ? 'none'
              : '',
        }}
      >
        <text
          x="-4"
          y="442"
          dx={zoomIn === 'hand' ? '7%' : ''}
          dy={zoomIn === 'hand' ? '-.4%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="-4" y="442">
            harnate (2)
          </tspan>
        </text>
        <line
          x1="53"
          x2="69"
          y1="437"
          y2="427"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="69"
          cy="427"
          r={zoomIn === 'hand' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['pisiform'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'hand')
              ? 'none'
              : '',
        }}
      >
        <text
          x="20"
          y="428.5"
          dx={zoomIn === 'hand' ? '7%' : ''}
          dy={zoomIn === 'hand' ? '-.25%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="3" y="428.5">
            pisiform (2)
          </tspan>
        </text>
        <line
          x1="60"
          x2="65.5"
          y1="425"
          y2="425"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="65.5"
          cy="425"
          r={zoomIn === 'hand' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['capitate'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'hand')
              ? 'none'
              : '',
        }}
      >
        <text
          x="100"
          y="419.5"
          dy={zoomIn === 'hand' ? '-.2%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="100" y="419.5">
            capitate (2)
          </tspan>
        </text>
        <line
          x1="80"
          x2="99"
          y1="426"
          y2="417"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="80"
          cy="426"
          r={zoomIn === 'hand' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['trapezoid'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'hand')
              ? 'none'
              : '',
        }}
      >
        <text
          x="101"
          y="462"
          dy={zoomIn === 'hand' ? '-.25%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="101" y="462">
            trapezoid (2)
          </tspan>
        </text>
        <polyline
          points="86.5,426.27 99,435.27 104,455.27"
          fill="none"
          stroke="#003cff"
          stroke-width="0.546"
        />
        <circle
          cx="86.5"
          cy="426.27"
          r={zoomIn === 'hand' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['trapezium'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'hand')
              ? 'none'
              : '',
        }}
      >
        <text
          x="112"
          y="435"
          dx={zoomIn === 'hand' ? '-.2%' : ''}
          dy={zoomIn === 'hand' ? '-.5%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
        >
          <tspan x="112" y="435">
            trapezium (2)
          </tspan>
        </text>
        <polyline
          points="90,425 97,422 105,422 110, 428"
          fill="none"
          stroke="#003cff"
          stroke-width="0.546"
        />
        <circle
          cx="90"
          cy="425"
          r={zoomIn === 'hand' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['scaphoid'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'hand')
              ? 'none'
              : '',
        }}
      >
        <text
          x="101"
          y="408"
          dy={zoomIn === 'hand' ? '-.1%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="101" y="408">
            scaphoid (2)
          </tspan>
        </text>
        <line
          x1="84"
          y1="419.5"
          x2="100"
          y2="407"
          fill="none"
          stroke="#003cff"
          stroke-width="0.546"
        />
        <circle
          cx="84"
          cy="419.5"
          r={zoomIn === 'hand' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['lunate'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'hand')
              ? 'none'
              : '',
        }}
      >
        <text
          x="2"
          y="404"
          dx={zoomIn === 'hand' ? '5.75%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="2" y="404">
            lunate (2)
          </tspan>
        </text>
        <line
          x1="50"
          x2="77"
          y1="404"
          y2="416"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="77"
          cy="416"
          r={zoomIn === 'hand' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['triquetrum'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'hand')
              ? 'none'
              : '',
        }}
      >
        <text
          x="-15"
          y="416"
          dx={zoomIn === 'hand' ? '8.1%' : ''}
          dy={zoomIn === 'hand' ? '-.1%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
          style={{
            lineHeight: '125%',
          }}
        >
          <tspan x="-15" y="416">
            triquetrum (2)
          </tspan>
        </text>
        <line
          x1="52"
          x2="71"
          y1="414"
          y2="419"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        ></line>
        <circle
          cx="71"
          cy="419"
          r={zoomIn === 'hand' ? '.566' : '1.166'}
          fill="#003cff"
        />
      </g>
    </g>
  );
};

export default HandLabels;
