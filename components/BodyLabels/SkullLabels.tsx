const SkullLabels = ({ answers, zoomIn, className }) => {
  return (
    <g className={className}>
      <g
        style={{
          display:
            (answers['mandible'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'skull')
              ? 'none'
              : '',
        }}
      >
        <text
          x="259.1376"
          y="116.91109"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="259.1376" y="116.91109">
            mandible
          </tspan>
        </text>
        <line
          x1="206.84"
          x2="266.35"
          y1="118.84"
          y2="118.84"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="206.84" cy="118.84" r="1.166" fill="#003cff" />
      </g>
      <g
        style={{
          display:
            (answers['maxilla'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'skull')
              ? 'none'
              : '',
        }}
      >
        <text
          x="259.1376"
          y="116.91109"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="259.1376" y="94">
            maxilla (2)
          </tspan>
        </text>
        <line
          x1="210.84"
          x2="266.35"
          y1="97"
          y2="97"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="210.84" cy="97" r="1.166" fill="#003cff" />
      </g>
    </g>
  );
};

export default SkullLabels;
