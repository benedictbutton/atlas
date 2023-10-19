import TextField from './TextField';

const InputForm = ({ handleSubmit, children }) => {
  return (
    <form className="mb-0 p-0 lg:mb-2 lg:p-5" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default InputForm;
