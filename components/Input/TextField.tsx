const TextField = ({
  className,
  placeholder,
  name,
  handleChange,
  forwardRef,
}) => {
  return (
    <label className="inline-block w-3/4 lg:w-full mt-1 mb-4 lg:m-0">
      <p className="mb-2 text-[#1b83ff] font-semibold leading-normal capitalize">
        {name}
      </p>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        name={name}
        ref={forwardRef}
        onChange={handleChange}
      />
    </label>
  );
};

export default TextField;
