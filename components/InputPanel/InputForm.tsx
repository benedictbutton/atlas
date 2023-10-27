import { PropsWithChildren } from 'react';

type InputFormProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const InputForm = ({
  handleSubmit,
  children,
}: PropsWithChildren<InputFormProps>) => {
  return (
    <form className="mb-0 p-0 lg:mb-2 lg:p-5" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default InputForm;
