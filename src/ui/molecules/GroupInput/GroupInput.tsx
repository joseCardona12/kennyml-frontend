import "./groupInput.styles.scss";
import { Input } from "@/ui/atoms";
import { ReactElement } from "react";

interface IGroupInputProps {
  error: string;
  placeholder: string;
  label: string;
  name: string;
  type: string;
  icon?: ReactElement;
  value: string;
  onClick?: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function GroupInput({
  error,
  placeholder,
  label,
  name,
  type,
  icon,
  onClick,
  onChange,
  value,
}: IGroupInputProps): React.ReactNode {
  return (
    <div className="group-input">
      <label htmlFor={name}>{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      <span className="input-icon" onClick={onClick}>
        {icon}
      </span>
      {error && <span>Error</span>}
    </div>
  );
}
