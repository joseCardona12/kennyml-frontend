import { IconUser } from "@/assets/icons";
import "./input.styles.scss";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  name: string;
  value: string;
}
export default function Input({
  type,
  placeholder,
  name,
  value,
  ...props
}: IInputProps): React.ReactNode {
  return (
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      {...props}
    />
  );
}
