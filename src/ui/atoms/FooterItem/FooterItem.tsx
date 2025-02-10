"use client";
import Link from "next/link";
import "./footerItem.styles.scss";
import { ReactElement, useState } from "react";

interface IFooterItemProps {
  icon: ReactElement;
  name: string;
  url: string;
  isActive: boolean;
  onClick: () => void;
}
export default function FooterItem({
  icon,
  name,
  url,
  isActive,
  onClick,
}: IFooterItemProps): React.ReactNode {
  return (
    <div
      className={`content-footer-item ${
        !isActive ? "content-footer-item show" : ""
      }`}
      onClick={onClick}
    >
      {isActive ? (
        <span className="item-icon">
          <Link className="icon-link" href={url}>
            {icon} {name}
          </Link>
        </span>
      ) : (
        <span className="item-icon">{icon}</span>
      )}
    </div>
  );
}
