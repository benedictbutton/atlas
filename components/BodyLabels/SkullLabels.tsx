const SkullLabels = ({
  answers,
  zoomIn,
  className,
}: BodyLabelProps) => {
  return (
    <g className={className}>
      <g
        style={{
          display:
            (answers['occipital'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'skull' && zoomIn !== 'inner_ear')
              ? 'none'
              : '',
        }}
      >
        <text
          x="-15"
          y="79"
          dy={
            zoomIn === 'skull' || zoomIn === 'inner_ear' ? '-.2%' : ''
          }
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="-15" y="79">
            occipatal
          </tspan>
        </text>
        <line
          x1="-17"
          x2={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '-35'
              : '-43'
          }
          y1="76"
          y2="76"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle
          cx={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '-35'
              : '-43'
          }
          cy="76"
          r="1.16"
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['parietal'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'skull' && zoomIn !== 'inner_ear')
              ? 'none'
              : '',
        }}
      >
        <text
          x="-15"
          y="40"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="-15" y="40">
            parietal (2)
          </tspan>
        </text>
        <line
          x1="-17"
          x2="-50"
          y1="38"
          y2="38"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="-50" cy="38" r="1.16" fill="#003cff" />
      </g>
      <g
        style={{
          display:
            (answers['temporal'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'skull' && zoomIn !== 'inner_ear')
              ? 'none'
              : '',
        }}
      >
        <text
          x="-73"
          y="120"
          dy={
            zoomIn === 'skull' || zoomIn === 'inner_ear' ? '-.4%' : ''
          }
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="-73" y="120">
            temporal (2)
          </tspan>
        </text>
        <line
          x1={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '-63'
              : '-70'
          }
          x2="-67"
          y1="70"
          y2="112"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle
          cx={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '-63'
              : '-70'
          }
          cy="70"
          r="1.16"
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['ethmoid'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'skull' && zoomIn !== 'inner_ear')
              ? 'none'
              : '',
        }}
      >
        <text
          x="-190"
          y="52"
          dx={
            zoomIn === 'skull' || zoomIn === 'inner_ear' ? '4.9%' : ''
          }
          dy={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '-.15%'
              : ''
          }
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="-190" y="52">
            ethmoid
          </tspan>
        </text>
        <line
          x1="-150"
          x2="-111"
          y1="50"
          y2={
            zoomIn === 'skull' || zoomIn === 'inner_ear' ? '56' : '60'
          }
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle
          cx="-111"
          cy={
            zoomIn === 'skull' || zoomIn === 'inner_ear' ? '56' : '60'
          }
          r=".75"
          fill="#003cff"
        />
      </g>
      <g
        style={{
          display:
            (answers['sphenoid'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'skull' && zoomIn !== 'inner_ear')
              ? 'none'
              : '',
        }}
      >
        <text
          x="-190"
          y="67"
          dx={
            zoomIn === 'skull' || zoomIn === 'inner_ear' ? '5.5%' : ''
          }
          dy={
            zoomIn === 'skull' || zoomIn === 'inner_ear' ? '-.3%' : ''
          }
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="-190" y="67">
            sphenoid
          </tspan>
        </text>
        <line
          x1="-144"
          x2="-101"
          y1="63"
          y2="63"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="-101" cy="63" r=".75" fill="#003cff" />
      </g>
      <g
        style={{
          display:
            (answers['frontal'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'skull' && zoomIn !== 'inner_ear')
              ? 'none'
              : '',
        }}
      >
        <text
          x="-190"
          y="37"
          dx={
            zoomIn === 'skull' || zoomIn === 'inner_ear' ? '3.5%' : ''
          }
          dy={
            zoomIn === 'skull' || zoomIn === 'inner_ear' ? '-.2%' : ''
          }
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="-190" y="37">
            frontal
          </tspan>
        </text>
        <line
          x1="-159"
          x2="-110"
          y1="34"
          y2="34"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="-110" cy="34" r="1.16" fill="#003cff" />
      </g>
    </g>
  );
};

export default SkullLabels;
