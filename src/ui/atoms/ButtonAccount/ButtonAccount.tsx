import "./buttonAccount.styles.scss";

interface IButtonAccountProps {
  text: string;
  type: "button" | "submit" | "reset";
}
export default function ButtonAccount({
  text,
  type,
}: IButtonAccountProps): React.ReactNode {
  return (
    <button className="button-account" type={type}>
      {text}
    </button>
  );
}
