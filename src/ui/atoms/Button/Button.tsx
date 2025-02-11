import "./button.styles.scss";

interface IButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}
export default function Button({
  text,
  type,
  onClick,
}: IButtonProps): React.ReactNode {
  return (
    <button className="button" type={type} onClick={onClick}>
      {text}
    </button>
  );
}
