"use client";

import "./iconButton.styles.scss";
import { ReactElement } from "react";

interface IIconButtonProps {
  icon: ReactElement;
  text: string;
  onClick: () => void;
}
export default function IconButton({ icon, text, onClick }: IIconButtonProps) {
  return (
    <button className="content-icon-button" onClick={onClick}>
      {icon}
      {text}
    </button>
  );
}
