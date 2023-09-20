const LegLabels = ({
  answers,
  zoomIn,
  className,
}: BodyLabelProps) => {
  return (
    <g className={className}>
      <g
        style={{
          display:
            (answers['femur'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'leg')
              ? 'none'
              : '',
        }}
      >
        <text
          x="276.16367"
          y="558.9801"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="276.16367" y="558.9801">
            Femur
          </tspan>
        </text>
        <line
          x1="233.1"
          x2="287.33"
          y1="561.72"
          y2="561.72"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="233.1" cy="561.72" r="1.165" fill="#003cff" />
      </g>
      <g
        style={{
          display:
            (answers['patella'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'leg')
              ? 'none'
              : '',
        }}
      >
        <text
          x="275.07037"
          y="593.15808"
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="275.07037" y="593.15808">
            Patella
          </tspan>
        </text>
        <line
          x1="235.28"
          x2="287.33"
          y1="595.02"
          y2="595.02"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="235.28" cy="595.02" r="1.165" fill="#003cff" />
      </g>
      <g
        style={{
          display:
            (answers['tibia'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'leg')
              ? 'none'
              : '',
        }}
      >
        <text
          x="273.97519"
          y="624.50208"
          dy={zoomIn === 'leg' ? '-.15%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="273.97519" y="624.50208">
            Tibia
          </tspan>
        </text>
        <line
          x1="228.19"
          x2="284.61"
          y1="625.6"
          y2="625.6"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="228.19" cy="625.6" r="1.165" fill="#003cff" />
      </g>
      <g
        style={{
          display:
            (answers['fibula'] ?? 0) < 1 ||
            (zoomIn && zoomIn !== 'leg')
              ? 'none'
              : '',
        }}
      >
        <text
          x="275.07166"
          y="660.53809"
          dx={zoomIn === 'leg' ? '3%' : ''}
          dy={zoomIn === 'leg' ? '-.15%' : ''}
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="275.07166" y="660.53809">
            Fibula
          </tspan>
        </text>
        <line
          x1="241.29"
          x2="298.8"
          y1="661.63"
          y2="661.63"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle cx="241.29" cy="661.63" r="1.166" fill="#003cff" />
      </g>
    </g>
  );
};

export default LegLabels;
