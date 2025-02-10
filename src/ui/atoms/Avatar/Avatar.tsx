import "./avatar.styles.scss";
import Image from "next/image";

interface IAvatarProps {
  url_image: string;
  alt_image: string;
  width?: number;
  height?: number;
}
export default function Avatar({
  url_image,
  alt_image,
  width,
  height,
}: IAvatarProps) {
  return (
    <div className="content-avatar">
      <Image
        className="avatar"
        alt={alt_image}
        src={url_image}
        width={width || 30}
        height={height || 30}
      />
    </div>
  );
}
