import Image from 'next/image';

type InputProps = {
  name: string;
  value: string;
  className?: string,
  type?: string;
  checked?: boolean;
  placeholder?: string;
  svg?: string;
  alt?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  name,
  value,
  className,
  type = 'text',
  checked,
  placeholder = '',
  svg = '',
  alt = '',
  handleChange = () => {},
}: InputProps) {
  return (
    <>
      {svg && <Image priority src={svg} height={18} width={16} alt={alt} />}
      <input
        className={className}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        checked={checked}
      />
    </>
  );
}
