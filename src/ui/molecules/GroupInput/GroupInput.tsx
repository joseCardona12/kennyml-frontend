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
  border?: string;
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
  border,
}: IGroupInputProps): React.ReactNode {
  return (
    <div className="group-input" style={{ border }}>
      <div className="input">
        <label className="input-label" htmlFor={name}>
          {label}
        </label>
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
      </div>
      <span className="input-error">{error && <span>{error}</span>}</span>
    </div>
  );
}
