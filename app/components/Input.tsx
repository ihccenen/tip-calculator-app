import Image from 'next/image';

type InputProps = {
  inputName: string;
  value: string;
  labelText?: string;
  svg?: string;
  alt?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  labelText,
  inputName,
  value,
  svg,
  alt,
  handleChange,
}: InputProps) {
  return (
    <label htmlFor={inputName}>
      {labelText}
      {svg && (
        <Image
          priority
          src={svg}
          height={18}
          width={16}
          alt={alt ?? ''}
        />
      )}
      <input
        type="text"
        name={inputName}
        id={inputName}
        value={value}
        onChange={handleChange}
        placeholder="0"
      />
    </label>
  );
}

Input.defaultProps = {
  labelText: '',
  svg: '',
  alt: '',
  handleChange: () => {},
};
