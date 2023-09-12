const Heel = ({ answers, zoomIn }) => {
  return (
    <g
      style={{
        display:
          (answers['calcaneus'] ?? 0) < 1 ||
          (zoomIn && zoomIn !== 'foot')
            ? 'none'
            : '',
      }}
    >
      <text
        x="240"
        y="750"
        fill="#000000"
        font-family="Arial"
        font-size="10px"
        stroke-width="1px"
        xmlSpace="preserve"
        style={{
          lineHeight: '125%',
        }}
      >
        <tspan x="240" y="750">
          calcaneus (2)
        </tspan>
      </text>
      <line
        x1="240"
        x2="228"
        y1="751"
        y2="770"
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
  );
};

export default Heel;
