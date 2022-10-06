import { useState } from 'react';

const useAuthForms = (callback: Function) => {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});

  const handleInputChange = (event: React.SyntheticEvent) => {
    event.persist();
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    if (event) {
      event.preventDefault();
    }
    try {
      const res = await callback({ variables: { inputs: inputs } });
      return res;
    } catch {
      console.log('Error submitting');
    }
  };

  return {
    inputs,
    handleInputChange,
    handleSubmit,
  };
};

export default useAuthForms;
