"use client";
import Image from "next/image";
import "./title.styles.scss";
import { useRouter } from "next/navigation";
import { IConArrowLeft } from "@/assets/icons";
import { ReactElement, useState } from "react";

interface ITitleProps {
  text: string;
  url_image?: string;
  icon?: ReactElement;
  url_back?: string;
}
export default function Title({
  text,
  url_image,
  icon,
  url_back,
}: ITitleProps): React.ReactNode {
  const router = useRouter();
  const [showMessageAccount, setShowMessageAccount] = useState<boolean>(false);

  const handleClick = (): void => {
    router.push("/dashboard/account");
    setShowMessageAccount(!showMessageAccount);
  };

  const handleClickBack = (): void => {
    if (!url_back) return;
    router.push(url_back);
  };
  return (
    <div className="content-title">
      <div className="title-c">
        <span className="c-icon" onClick={handleClickBack}>
          {icon}
        </span>
        <h2 className="title">{text}</h2>
      </div>
      <div className="title-image" onClick={handleClick}>
        <Image
          className="image"
          src={url_image || "/images/avatar_random.jpg"}
          alt="image-user"
          width={20}
          height={20}
        />
        {showMessageAccount && <div className="image-text">Account</div>}
      </div>
    </div>
  );
}
