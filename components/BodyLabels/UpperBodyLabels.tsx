const UpperBodyLabels = ({
  answers,
  zoomIn,
  className,
}: BodyLabelProps) => {
  return (
    <g className={className}>
      <g
        style={{
          display:
            (answers['manubrium'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'upperBody')
              ? 'none'
              : '',
        }}
      >
        <text
          x="50.825661"
          y="164.41409"
          dx={zoomIn === 'upperBody' ? '2.7%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="50.825661" y="164.41409">
            manubrium
          </tspan>
        </text>
        <line
          x1="85.825661"
          x2="200"
          y1="166.95"
          y2="166.95"
          fill="none"
          stroke="#f00"
          stroke-width=".546"
        />
        <circle
          cx="200"
          cy="166.95"
          r={zoomIn === 'hand' ? '.566' : '1.166'}
          fill="#f00"
        />
      </g>
      <g
        style={{
          display:
            (answers['sternum'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'upperBody')
              ? 'none'
              : '',
        }}
      >
        <text
          x="50.31085"
          y="192.80872"
          dx={zoomIn === 'upperBody' ? '1%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="50.31085" y="192.80872">
            sternum
          </tspan>
        </text>
        <line
          x1="70"
          x2="201.5"
          y1="195.36"
          y2="195.36"
          fill="none"
          stroke="#f00"
          stroke-width=".546"
        />
        <circle
          cx="201.5"
          cy="195.36"
          r={zoomIn === 'hand' ? '.566' : '1.166'}
          fill="#f00"
        />
      </g>
      <g
        style={{
          display:
            (answers['cervical vertebrae'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'upperBody')
              ? 'none'
              : '',
        }}
      >
        <text
          x="37.095659"
          y="99.933304"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '120.00000477%' }}
          xmlSpace="preserve"
        >
          <tspan
            x="37.095659"
            y="99.933304"
            dx={zoomIn === 'upperBody' ? '2%' : ''}
          >
            Cervical
          </tspan>
          <tspan
            x="37.095659"
            y="113.1333"
            dx={zoomIn === 'upperBody' ? '2%' : ''}
          >
            Vertebrae{' '}
            <tspan
              font-family="Arial"
              font-size="6px"
              style={{ lineHeight: '120.00000477%' }}
            >
              (CI-CVII)
            </tspan>
          </tspan>
        </text>
        {zoomIn && zoomIn === 'upperBody' && (
          <>
            <polyline
              points="85.795 115.27 145.53 115.27 145.53 96.547 200.77 96.547"
              fill="none"
              stroke="#003cff"
              stroke-width=".546"
            />
            <circle
              cx="200.77"
              cy="96.547"
              r={zoomIn === 'upperBody' ? '.566' : '1.166'}
              fill="#003cff"
            />
          </>
        )}
        <polyline
          points="145.53 115.06 145.53 142.55 201.03 142.39"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="201.03" cy="142.39" r="1.166" fill="#003cff" />
      </g>
      <g
        style={{
          display:
            (answers['thoracic vertebrae'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'upperBody')
              ? 'none'
              : '',
        }}
      >
        <text
          x="45.825661"
          y="136.59131"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '120.00000477%' }}
          xmlSpace="preserve"
        >
          <tspan
            x="45.825661"
            y="138.59131"
            dx={zoomIn === 'upperBody' ? '3%' : ''}
          >
            Thoracic
          </tspan>
          <tspan
            x="45.825661"
            y="147.79131"
            dx={zoomIn === 'upperBody' ? '3%' : ''}
          >
            Vertebrae{' '}
            <tspan
              font-family="Arial"
              font-size="6px"
              style={{ lineHeight: '120.00000477%' }}
            >
              (TI - TXII)
            </tspan>
          </tspan>
        </text>
        <line
          x1="96.715"
          x2="200.5"
          y1="151.43"
          y2="151.43"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <polyline
          points="198.02 281.02 117.28 281.02 117.28 150.9"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="200.5" cy="151.3" r="1.166" fill="#003cff" />
        <circle cx="198.02" cy="281.02" r="1.166" fill="#003cff" />
      </g>
      <g
        style={{
          display:
            (answers['ribs'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'upperBody')
              ? 'none'
              : '',
        }}
      >
        <text
          x="323.93625"
          y="218.46509"
          dx={zoomIn === 'upperBody' ? '1.5%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="323.93625" y="218.46509">
            ribs (24)
          </tspan>
        </text>
        {/* <polyline
          points="224.85 146.3 285.45 146.3 285.45 219.56 252.23 219.56"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        /> */}
        <polyline
          points="224.85 146.3 240.45 146.3 285.45 219.56 252.23 219.56"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="224.85" cy="146.3" r="1.166" fill="#003cff" />
        <circle cx="252.23" cy="219.56" r="1.166" fill="#003cff" />
        <polyline
          points="238.72 296.75 285.45 296.75 285.45 219.56 339.59 219.56"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="238.72" cy="296.75" r="1.166" fill="#003cff" />
      </g>
      <g
        style={{
          display:
            (answers['lumbar vertebrae'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'upperBody')
              ? 'none'
              : '',
        }}
      >
        <text
          x="39.825661"
          y="278.16531"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '120.00000477%' }}
          xmlSpace="preserve"
        >
          <tspan
            x="39.825661"
            y="278.16531"
            dx={zoomIn === 'upperBody' ? '3%' : ''}
          >
            Lumbar
          </tspan>
          <tspan
            x="39.825661"
            y="291.36533"
            dx={zoomIn === 'upperBody' ? '3%' : ''}
          >
            Vertebrae{' '}
            <tspan
              font-family="Arial"
              font-size="6px"
              style={{ lineHeight: '120.00000477%' }}
            >
              (L I - L V)
            </tspan>
          </tspan>
        </text>
        <line
          x1="92.347"
          x2="198.68"
          y1="294.36"
          y2="294.36"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="198.68" cy="294.36" r="1.166" fill="#003cff" />
        <polyline
          points="195.64 347.19 117.28 347.19 117.28 294.36"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="195.64" cy="347.19" r="1.166" fill="#003cff" />
      </g>
    </g>
  );
};

export default UpperBodyLabels;
