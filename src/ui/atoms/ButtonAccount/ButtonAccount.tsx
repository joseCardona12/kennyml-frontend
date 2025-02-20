import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import "./buttonAccount.styles.scss";

interface IButtonAccountProps {
  text: string;
  type: "button" | "submit" | "reset";
  onclick?: () => void;
}
export default function ButtonAccount({
  text,
  type,
  onclick,
}: IButtonAccountProps): React.ReactNode {
  return (
    <button className="button-account" type={type} onClick={onclick}>
      {text}
    </button>
  );
}
