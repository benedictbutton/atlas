import styles from '../../styles/IntroMessage.module.css';

const Tracker = ({ isMounted }: { isMounted: boolean }) => {
  const [correct, incorrect] = [39, 7];

  const [radius, stroke] = [120, 10];
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  let strokeDashoffset =
    circumference - (correct / 188) * circumference;
  let incorrectStrokeDashoffset = {
    strokeDashoffset: `${
      -1 * (circumference - (incorrect / 188) * circumference)
    }`,
  };

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
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
        className="score_tracker"
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
        className="score_tracker"
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
        className="score_tracker"
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
        fontSize="1.5rem"
        stroke="transparent"
        stroke-width="2px"
        dy="1rem"
      >
        <tspan
          className={`${
            isMounted ? styles.mounted : styles.unmounting
          }`}
          fill="#df001d"
        >
          incorrect
        </tspan>
        <tspan fill="url('#myGradient')"> / </tspan>
        <tspan
          className={`${
            isMounted ? styles.mounted : styles.unmounting
          }`}
          fill="#1b83ff"
        >
          correct
        </tspan>
      </text>
    </svg>
  );
};

export default Tracker;
