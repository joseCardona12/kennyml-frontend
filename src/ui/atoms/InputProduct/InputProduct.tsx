import "./inputProduct.styles.scss";

interface IInputProductProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  name: string;
  value: string;
}
export default function InputProductUser({
  type,
  placeholder,
  name,
  value,
  ...props
}: IInputProductProps): React.ReactNode {
  return (
    <input
      className="input-user"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      {...props}
    />
  );
}
