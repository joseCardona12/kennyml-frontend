"use client";
import { useModalAccountState } from "@/app/core/application/global-state";
import "./actionUser.styles.scss";
import { ReactElement } from "react";
import { useRouter } from "next/navigation";

interface IActionUserProps {
  title: string;
  paragraph: string;
  infoAction: string;
  icon?: ReactElement;
  borderBottom?: string;
  urlPage?: string;
}
export default function ActionUser({
  title,
  paragraph,
  infoAction,
  icon,
  borderBottom,
  urlPage,
}: IActionUserProps): React.ReactNode {
  const router = useRouter();
  const { showModal, setShowModal } = useModalAccountState((state) => state);
  const handleClick = (): void => {
    if (title === "Name" || title === "LastName" || title === "Address") {
      setShowModal({
        name: title,
        placeholder: title,
        state: !showModal.state,
        value: title,
      });
      return;
    }
    router.push(`/dashboard/account/my-profile/${urlPage}`);
  };
  return (
    <div
      className="content-action-user"
      style={{ borderBottom }}
      onClick={handleClick}
    >
      <div className="user-info">
        <h5 className="info-title">{title}</h5>
        <p className="info-paragraph">{paragraph}</p>
      </div>
      <div className="user-data">
        <p className="data">{infoAction}</p>
        <span className="data-icon">{icon}</span>
      </div>
    </div>
  );
}
