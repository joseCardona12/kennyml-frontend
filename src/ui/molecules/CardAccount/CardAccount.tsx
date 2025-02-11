import "./cardAccount.styles.scss";
import { ReactElement } from "react";

interface ICardAccountProps {
  icon: ReactElement;
  title: string;
  description: string;
  onClick?: () => void;
}
export default function CardAccount({
  icon,
  title,
  description,
  onClick,
}: ICardAccountProps): React.ReactNode {
  return (
    <div className="content-card-account" onClick={onClick}>
      <span className="account-icon">{icon}</span>
      <h4 className="account-title">{title}</h4>
      <p className="account-paragraph">{description}</p>
    </div>
  );
}
