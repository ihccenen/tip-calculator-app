import Image from 'next/image';

type InputProps = {
  inputName: string;
  value: string;
  placeholder?: string;
  svg?: string;
  alt?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  inputName,
  value,
  placeholder,
  svg,
  alt,
  handleChange,
}: InputProps) {
  return (
    <>
      {svg && (
        <Image priority src={svg} height={18} width={16} alt={alt ?? ''} />
      )}
      <input
        type="text"
        name={inputName}
        id={inputName}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </>
  );
}

Input.defaultProps = {
  placeholder: '',
  svg: '',
  alt: '',
  handleChange: () => {},
};
