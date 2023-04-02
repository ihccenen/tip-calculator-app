import { useState } from 'react';

export default function useInput(initialValue: string, pattern?: RegExp) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = pattern || /^(?!0{2,})[0-9]*\.?[0-9]*$/;
    if (e.currentTarget.type === 'radio' || regex.test(e.currentTarget.value)) {
      setValue(e.currentTarget.value);
    }
  };

  const reset = () => {
    setValue(initialValue);
  };

  return {
    value,
    handleChange,
    reset,
  };
}
