const CloseButton = ({ page, closeDisplayIntro }) => {
  return (
    <button
      onClick={closeDisplayIntro}
      className={`absolute bottom-2 ${
        page === 1 ? 'left-2' : 'right-2'
      } text-xl text-[#80b6ec]`}
    >
      Close
    </button>
  );
};

export default CloseButton;
