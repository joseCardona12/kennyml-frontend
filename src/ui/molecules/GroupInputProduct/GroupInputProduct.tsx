import { InputProductUser } from "@/ui/atoms";
import "./groupInputProduct.styles.scss";

interface IGroupInputProductProps {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GroupInputProduct({
  name,
  placeholder,
  type,
  value,
  label,
  onChange,
}: IGroupInputProductProps): React.ReactNode {
  return (
    <div className="content-group-product">
      <label htmlFor={name.toLowerCase()}>{label}</label>
      <InputProductUser
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
