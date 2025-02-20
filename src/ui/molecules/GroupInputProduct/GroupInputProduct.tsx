import { InputProductUser } from "@/ui/atoms";
import "./groupInputProduct.styles.scss";

interface IGroupInputProductProps {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  ref?: React.RefObject<HTMLInputElement> | undefined;
  accept?: string;
  multiple?: boolean;
}

export default function GroupInputProduct({
  name,
  placeholder,
  type,
  value,
  label,
  onChange,
    style,
    ref,
    accept,
    multiple,
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
        style={style}
        ref={ref}
        accept={accept}
        multiple={multiple}
      />
    </div>
  );
}
