// className="w-full px-2 py-2.5 mb-0 lg:p-3 lg:mb-3 text-[#434343] font-medium placeholder-gray-400 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300"
// placeholder="Country Name"
// name="country"
// handleChange={handleSearchValue}
// forwardRef={(el: HTMLInputElement) =>
//   (formInput.current = el)
// }

type TextFieldProps = {
  className: string;
  placeholder: string;
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  forwardRef: (el: HTMLInputElement) => HTMLInputElement;
};

const TextField = ({
  className,
  placeholder,
  name,
  handleChange,
  forwardRef,
}: TextFieldProps) => {
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
