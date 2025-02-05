import "./avatar.styles.scss";
import Image from "next/image";

interface IAvatarProps {
  url_image: string;
  alt_image: string;
}
export default function Avatar({ url_image, alt_image }: IAvatarProps) {
  return (
    <div className="content-avatar">
      <Image
        className="avatar"
        alt={alt_image}
        src={url_image}
        width={30}
        height={30}
      />
    </div>
  );
}
