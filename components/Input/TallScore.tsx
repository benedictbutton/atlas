import { Answers } from '../Countries';
import useScore from '../../utils/useScore';
// const [correct, incorrect] = useScore(answers);
// : Answers
const TallScore = ({ correct, incorrect }) => {
  // const [correct, incorrect] = useScore(t);

  const [radius, stroke] = [180, 10];
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  let strokeDashoffset =
    circumference - (correct / 188) * circumference;
  let incorrectStrokeDashoffset = {
    strokeDashoffset: `${
      -1 * (circumference - (incorrect / 188) * circumference)
    }`,
  };

  // const numOfCountries: number = (
  //   Object.keys(answers) as Array<keyof typeof answers>
  // ).length;

  return (
    <div className="w-full">
      <svg
        width="100%"
        height="100%"
        // height={radius * 2}
        // width={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
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
          fontSize={`${
            incorrect >= 10 && correct >= 10 ? '6.3rem' : '7rem'
          }`}
          stroke="transparent"
          stroke-width="2px"
          dy="2rem"
        >
          <tspan fill="#df001d">{incorrect}</tspan>
          <tspan fill="url('#myGradient')"> / </tspan>
          <tspan fill="#1b83ff">{correct}</tspan>
        </text>
      </svg>
    </div>
  );
};

export default TallScore;
