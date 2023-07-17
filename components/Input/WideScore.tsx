const WideScore = ({ correct, incorrect }) => {
  const [radius, stroke] = [100, 10];
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  let strokeDashoffset =
    circumference - (correct / 192) * circumference;
  let incorrectStrokeDashoffset = {
    strokeDashoffset: `${
      -1 * (circumference - (incorrect / 192) * circumference)
    }`,
  };

  const fontsize = () => {
    if (correct >= 100 || incorrect >= 100) return '2.5rem';
    if (correct >= 10 && incorrect >= 10) return '3rem';

    return '4rem';
  };

  return (
    <svg
      height="100%"
      width="100%"
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      className="inline-block"
    >
      <defs>
        <linearGradient id="myGradient">
          <stop offset="50%" stop-color="#df001d" />
          <stop offset="50%" stop-color="#1b83ff" />
        </linearGradient>
      </defs>
      <circle
        stroke="#dee1e1"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={0}
        style={{ strokeDashoffset }}
        stroke-width={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#1b83ff"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        stroke-width={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#df001d"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        style={incorrectStrokeDashoffset}
        stroke-width={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        className="score-text"
        x={radius}
        y={radius}
        textAnchor="middle"
        fontSize={fontsize()}
        stroke="transparent"
        stroke-width="2px"
      >
        <tspan fill="#df001d" dominantBaseline="middle">
          {incorrect}
        </tspan>
        <tspan fill="url('#myGradient')" dominantBaseline="middle">
          {' '}
          /{' '}
        </tspan>
        <tspan fill="#1b83ff" dominantBaseline="middle">
          {correct}
        </tspan>
      </text>
    </svg>
  );
};

export default WideScore;
