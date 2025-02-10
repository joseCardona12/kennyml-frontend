"use client";
import { IconClose } from "@/assets/icons";
import "./modal.styles.scss";
import { ReactElement } from "react";
import { useModalState } from "@/app/core/application/global-state";

interface IModalProps {
  icon?: ReactElement;
  text: string;
}
export default function Modal({ icon, text }: IModalProps): React.ReactNode {
  const { setShowModal } = useModalState((state) => state);

  const handleClose = (): void => {
    setShowModal({
      state: false,
      message: "",
      statusCode: 0,
    });
  };
  return (
    <div className="content-modal">
      <div className="modal">
        <span className="modal-close" onClick={handleClose}>
          <IconClose />
        </span>
        <span className="modal-icon">{icon}</span>
        <p className="modal-information">{text}</p>
      </div>
    </div>
  );
}
