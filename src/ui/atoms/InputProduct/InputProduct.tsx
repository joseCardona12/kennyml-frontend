import "./inputProduct.styles.scss";

interface IInputProductProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  ref?:React.RefObject<HTMLInputElement> | undefined
}
export default function InputProductUser({
  type,
  placeholder,
  name,
  value,
    ref,
  ...props
}: IInputProductProps): React.ReactNode {
  return (
    <input
      className="input-user"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
        ref={ref}
      {...props}
    />
  );
}
