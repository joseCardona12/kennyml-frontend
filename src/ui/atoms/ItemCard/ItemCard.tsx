"use client";
import { useRouter } from "next/navigation";
import "./itemCard.styles.scss";
import { ReactElement } from "react";

interface IItemCardProps {
  iconFirst?: ReactElement;
  text: string;
  iconSecond?: ReactElement;
  width: string;
  backgroundColor: string;
}
export default function ItemCard({
  iconFirst,
  text,
  iconSecond,
  width,
  backgroundColor,
}: IItemCardProps): React.ReactNode {
  const router = useRouter();
  const handleClick = () => {
    if (text === "About Me") {
      router.push(`/dashboard/setting/about_me`);
      return;
    }
    router.push(`/dashboard/setting/${text.toLowerCase()}`);
  };
  return (
    <div
      className="content-itemCard"
      style={{ width, backgroundColor }}
      onClick={handleClick}
    >
      {iconFirst ? (
        <span className="itemCard-icon">
          {iconFirst}
          {text}
        </span>
      ) : (
        <div className="itemCard-info">
          {text}
          {iconSecond}
        </div>
      )}
    </div>
  );
}
