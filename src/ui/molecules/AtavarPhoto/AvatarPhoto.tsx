"use client";
import "./avatarPhoto.styles.scss";
import { IconImage } from "@/assets/icons";
import { Avatar } from "@/ui/atoms";
import React from "react";

interface IAvatarPhotoProps {
  alt_image: string;
  url_image: string;
  width?: number;
  height?: number;
}
export default function AvatarPhoto({
  alt_image,
  url_image,
  width,
  height,
}: IAvatarPhotoProps): React.ReactNode {
  const handleClickIcon = (): void => {
    console.log("click icon");
  };
  return (
    <div className="content-avatar-photo">
      <span className="photo-icon" onClick={handleClickIcon}>
        <IconImage />
      </span>
      <Avatar
        alt_image={alt_image}
        url_image={url_image}
        width={width}
        height={height}
      />
    </div>
  );
}
