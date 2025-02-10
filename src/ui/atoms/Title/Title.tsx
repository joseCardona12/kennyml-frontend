import Image from "next/image";
import "./title.styles.scss";

interface ITitleProps {
  text: string;
  url_image?: string;
}
export default function Title({
  text,
  url_image,
}: ITitleProps): React.ReactNode {
  return (
    <div className="content-title">
      <h2 className="title">{text}</h2>
      <div className="title-image">
        <Image
          className="image"
          src={url_image || ""}
          alt="image-user"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
}
