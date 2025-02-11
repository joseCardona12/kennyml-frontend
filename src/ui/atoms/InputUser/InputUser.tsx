import "./inputUser.styles.scss";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  border?: string;
}
export default function InputUser({
  type,
  placeholder,
  name,
  value,
  border,
  ...props
}: IInputProps): React.ReactNode {
  return (
    <input
      className="input-user"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      {...props}
      style={{ border }}
    />
  );
}
