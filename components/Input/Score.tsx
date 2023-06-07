import { useEffect } from 'react';
import useScore from '../../utils/useScore';

const Score = ({ answers }) => {
  const [correct, incorrect] = useScore(answers);

  console.log(incorrect);

  const [radius, stroke] = [180, 8];
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  let strokeDashoffset =
    circumference - (correct / 100) * circumference;
  let incorrectStrokeDashoffset = {
    strokeDashoffset: `${
      -1 * (circumference - (incorrect / 100) * circumference)
    }`,
  };

  return (
    <svg height={radius * 2} width={radius * 2} viewBox="0 0 360 360">
      <defs>
        <linearGradient id="myGradient">
          <stop offset="50%" stop-color="#df001d" />
          <stop offset="50%" stop-color="#1b83ff" />
        </linearGradient>
      </defs>
      <circle
        stroke="white"
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
        fontSize="9rem"
        stroke="transparent"
        stroke-width="2px"
        dy="3rem"
      >
        <tspan fill="#df001d">0</tspan>
        <tspan fill="url('#myGradient')"> / </tspan>
        <tspan fill="#1b83ff">0</tspan>
      </text>
    </svg>
  );
};

export default Score;
