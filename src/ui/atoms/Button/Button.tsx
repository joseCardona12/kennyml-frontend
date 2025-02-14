import { ButtonHTMLAttributes, ReactElement } from "react";
import "./button.styles.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | ReactElement;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  width?: string;
  backgroundColor?: string;
  textHover?: string;
}
export default function Button({
  text,
  type,
  onClick,
  width,
  backgroundColor,
  textHover,
}: IButtonProps): React.ReactNode {
  return (
    <button
      className="button"
      type={type}
      onClick={onClick}
      style={{ backgroundColor, width }}
    >
      {text}
      <span className="button-info">{textHover}</span>
    </button>
  );
}
