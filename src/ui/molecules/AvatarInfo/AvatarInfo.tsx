import "./avatarInfo.styles.scss";
import { ReactElement } from "react";

interface IAvatarInfoProps {
  name: string;
  point: string;
  icon_point: ReactElement;
  text_member: string;
  level: string;
  city: string;
  role: string;
}
export default function AvatarInfo({
  name,
  point,
  icon_point,
  text_member,
  level,
  city,
  role,
}: IAvatarInfoProps): React.ReactNode {
  return (
    <div className="content-avatar-info">
      <div className="info-first">
        <h2 className="info-name">{name}</h2>
        <h5 className="info-point">
          {point}
          <span className="point-icon">{icon_point}</span>
        </h5>
      </div>
      <p className="info-role">{role}</p>
      <p className="info-level">
        <strong>Level:</strong> {level}
      </p>
      <p className="info-city">
        <strong>City:</strong> {city}
      </p>
      <p className="info-member">{text_member}</p>
    </div>
  );
}
