const BadgeExo = ({ foreground_color, background_color, text, text_color }) => {
  return (
    <svg
      width="44"
      height="23"
      viewBox="0 0 44 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Union">
        <mask id="path-1-inside-1_2_81" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.96985 23H6.19094H37.809H38.0301L44 11.5L38.0301 0H37.809H6.19094H5.96985L0 11.5L5.96985 23Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.96985 23H6.19094H37.809H38.0301L44 11.5L38.0301 0H37.809H6.19094H5.96985L0 11.5L5.96985 23Z"
          fill={background_color}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle" // Center the text horizontally
          fill={foreground_color}
          mask="url(#path-1-inside-1_2_81)"
        >
          {text}
        </text>
      </g>
    </svg>
  );
};

export { BadgeExo };
