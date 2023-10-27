const Reset = ({
  correct,
  incorrect,
  handleResetAnswers,
}: {
  correct: number;
  incorrect: number;
  handleResetAnswers: () => void;
}) => {
  return (
    <>
      {correct + incorrect > 0 && (
        <button
          onClick={handleResetAnswers}
          className="flex-initial reset bottom-2 right-5 h-[24px] leading-[24px] text-[#df001d] text-right mb-1"
        >
          <span className="inline-block h-full leading-normal align-middle mb-4">
            Reset
          </span>
        </button>
      )}
    </>
  );
};

export default Reset;
