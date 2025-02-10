import { IconStar } from "@/assets/icons";
import { AvatarInfo, AvatarPhoto } from "@/ui/molecules";
import "./avatarInformation.styles.scss";

export default function AvatarInformation(): React.ReactNode {
  return (
    <div className="content-avatar">
      <AvatarPhoto
        alt_image="image_user"
        url_image="/images/avatar_random.jpg"
        height={80}
        width={80}
      />
      <AvatarInfo
        icon_point={<IconStar />}
        name="Kenny"
        point="12"
        text_member="Member since the 06/02/2025"
        level="Explorer"
        city="Bello"
        role="ADMIN"
      />
    </div>
  );
}
