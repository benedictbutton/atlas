const InnerEarLabels = ({
  answers,
  zoomIn,
  className,
}: BodyLabelProps) => {
  return (
    <g className={className}>
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
          x="-205"
          y="153"
          dx={
            zoomIn === 'skull' || zoomIn === 'inner_ear' ? '16%' : ''
          }
          dy={
            zoomIn === 'skull' || zoomIn === 'inner_ear' ? '2.8%' : ''
          }
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
        >
          <tspan x="-205" y="153">
            malleus (2)
          </tspan>
        </text>
        <line
          x1={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '-93'
              : '-150'
          }
          x2={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '-110'
              : '-107'
          }
          y1={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '175'
              : '152'
          }
          y2={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '175'
              : '172'
          }
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle
          cx={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '-93'
              : '-107'
          }
          cy={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '175'
              : '172'
          }
          r={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '.7'
              : '1.16'
          }
          fill="#003cff"
        />
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
          x="-170"
          y="140"
          dx={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '23.5%'
              : ''
          }
          dy={
            zoomIn === 'skull' || zoomIn === 'inner_ear' ? '4.3%' : ''
          }
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          xmlSpace="preserve"
        >
          <tspan x="-170" y="140">
            incus (2)
          </tspan>
        </text>
        <line
          x1={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '-90'
              : '-127'
          }
          x2={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '-68'
              : '-97'
          }
          y1={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '175'
              : '140'
          }
          y2={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '175'
              : '172'
          }
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle
          cx={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '-90'
              : '-97'
          }
          cy={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '175'
              : '172'
          }
          r={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '.7'
              : '1.16'
          }
          fill="#003cff"
        />
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
          x="-50"
          y="173"
          dx={
            zoomIn === 'skull' || zoomIn === 'inner_ear' ? '-4%' : ''
          }
          dy={
            zoomIn === 'skull' || zoomIn === 'inner_ear' ? '1.5%' : ''
          }
          fill="#000000"
          font-family="Arial"
          font-size="11px"
          stroke-width="1px"
          style={{ lineHeight: '125%' }}
          xmlSpace="preserve"
        >
          <tspan x="-50" y="173">
            stapes (2)
          </tspan>
        </text>
        <line
          x1={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '-79'
              : '-52'
          }
          x2={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '-68'
              : '-74'
          }
          y1={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '180'
              : '170'
          }
          y2="184"
          fill="none"
          stroke="#003cff"
          stroke-width=".546"
        />
        <circle
          cx={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '-79'
              : '-74'
          }
          cy={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '180'
              : '184'
          }
          r={
            zoomIn === 'skull' || zoomIn === 'inner_ear'
              ? '.7'
              : '1.16'
          }
          fill="#003cff"
        />
      </g>
    </g>
  );
};

export default InnerEarLabels;

// x1="-52"
// x2="-74"
// y1="170"
// y2="184"
