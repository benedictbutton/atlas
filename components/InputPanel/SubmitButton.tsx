const SubmitButton = ({ disabled }) => {
  return (
    <button
      className="w-3/4 lg:w-full h-8 mb-5 lg:mb-0 bg-indigo-600 text-white rounded-md disabled:opacity-50"
      disabled={disabled}
    >
      Submit
    </button>
  );
};

export default SubmitButton;
