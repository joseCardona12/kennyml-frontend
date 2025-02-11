import { IconUpdate } from "@/assets/icons";
import "./avatarV2.styles.scss";

interface IAvatarV2Props {
  name: string;
}
export default function AvatarV2({ name }: IAvatarV2Props): React.ReactNode {
  return (
    <div className="content-avatar">
      <p>{name[0]}</p>
      <span className="avatar-icon">
        <IconUpdate className="icon" />
      </span>
    </div>
  );
}
