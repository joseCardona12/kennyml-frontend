import "./button.styles.scss";

interface IButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
}
export default function Button({ text, type }: IButtonProps): React.ReactNode {
  return (
    <button className="button" type={type}>
      {text}
    </button>
  );
}
