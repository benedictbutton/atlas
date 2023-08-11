const CloseButton = ({ handleZoom }) => {
  return (
    <button
      className="absolute top-[10%] left-[10%] w-12 h-12"
      onClick={(event) => handleZoom(event, 'close')}
      aria-label="close"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <g>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </g>
      </svg>
    </button>
  );
};

export default CloseButton;
