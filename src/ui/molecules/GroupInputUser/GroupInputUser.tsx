import "./groupInputUser.styles.scss";
import { InputUser } from "@/ui/atoms";
import { ReactElement } from "react";

interface IGroupInputUserProps {
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
export default function GroupInpuUser({
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
}: IGroupInputUserProps): React.ReactNode {
  return (
    <div className="group-input-user">
      <label htmlFor={name}>{label}</label>
      <div className="user-input">
        <InputUser
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          border={border}
        />
        <span className="input-icon" onClick={onClick}>
          {icon}
        </span>
      </div>
      {error && <span>Error</span>}
    </div>
  );
}
