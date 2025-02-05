import "./avatarUser.styles.scss";
import { Avatar } from "@/ui/atoms";
import React from "react";

interface IAvatarUserProps {
  alt_image: string;
  url_image: string;
  user_name: string;
}
export default function AvatarUser({
  alt_image,
  url_image,
  user_name,
}: IAvatarUserProps): React.ReactNode {
  return (
    <div className="content-avatar-user">
      <Avatar alt_image={alt_image} url_image={url_image} />
      <h5 className="user-name">{user_name}</h5>
    </div>
  );
}
