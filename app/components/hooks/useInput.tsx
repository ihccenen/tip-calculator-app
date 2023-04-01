import { useState } from 'react';

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]*\.?[0-9]*$/;

    if (e.currentTarget.type === 'radio' || regex.test(e.currentTarget.value)) {
      setValue(e.currentTarget.value);
    }
  };

  return {
    value,
    handleChange,
  };
}
