"use client";
import { InputUser } from "@/ui/atoms";
import "./modalAccount.styles.scss";
import React, { useState } from "react";

interface IModalAccountProps {
  title: string;
  paragraph: string;
  handleSave?: () => void;
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function ModalAccount({
  title,
  paragraph,
  handleSave,
  name,
  placeholder,
  type,
  value,
  onChange,
}: IModalAccountProps): React.ReactNode {
  const [showModal, setShowModal] = useState<boolean>(true);
  const handleCancel = (): void => {
    setShowModal(!showModal);
  };
  return (
    <>
      {showModal && (
        <div className="modal-account">
          <div className="account">
            <div className="account-info">
              <h4 className="info-title">{title}</h4>
              <p className="info-paragraph">{paragraph}</p>
              <InputUser
                name={name}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
              />
            </div>
            <div className="account-buttons">
              <button className="button-left" onClick={handleCancel}>
                Cancel
              </button>
              <button className="button-right" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
