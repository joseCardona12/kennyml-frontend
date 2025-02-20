import { Button } from "@/ui/atoms";
import "./card.styles.scss";
import { IconEye, IconTrash, IconUpdate } from "@/assets/icons";
import Image from "next/image";

interface ICardProps {
  title: string;
  paragraph: string;
}
export default function Card({
  title,
  paragraph,
}: ICardProps): React.ReactNode {
  return (
    <div className="content-card">
      <div className="card-header">
        <Image
          src={"/images/avatar_random.jpg"}
          alt="header-image"
          height={110}
          width={110}
          className="header-image"
        />
      </div>
      <div className="card-body">
        <div className="body-info">
          <h2 className="info-title">{title}</h2>
          <p className="info-paragraph">{paragraph}</p>
        </div>
        <div className="body-buttons">
          <Button
            text={<IconUpdate />}
            type="button"
            backgroundColor="var(--color-green)"
            textHover="Update shopping"
          />
          <Button
            text={<IconEye />}
            type="button"
            backgroundColor="var(--color-blue)"
            textHover="Show specific shopping"
          />
          <Button
            text={<IconTrash />}
            type="button"
            backgroundColor="var(--color-red)"
            textHover="Delete shopping"
          />
        </div>
      </div>
    </div>
  );
}
