"use client";
import {
  useModalState,
} from "@/app/core/application/global-state";
import "./sectionEdit.styles.scss";
import { Button, InputUser, Modal } from "@/ui/atoms";
import React from "react";
import { IconErrorMessage } from "@/assets/icons";

interface ISectionEditProps {
  name: string;
  placeholder: string
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  textButton: string;
}
export default function SectionEditEmail({
  name,
  placeholder,
  type,
  value,
  onChange,
  onClick,
  textButton = "Send",
}: ISectionEditProps): React.ReactNode {
  const { showModal } = useModalState((state) => state);
  return (
    <div className="content-section-edit">
      <InputUser
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
      />
      <Button text={textButton} type="button" onClick={onClick} />
      {showModal.state && (
        <Modal
          text={showModal.message}
          icon={<IconErrorMessage />}
          statusCode={showModal.statusCode}
        />
      )}
    </div>
  );
}
