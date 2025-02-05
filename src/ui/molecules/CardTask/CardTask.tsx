"use client";
import "./cardTask.styles.scss";
import { IconCheck } from "@/assets/icons";
import { Avatar } from "@/ui/atoms";

interface ICardTaskProps {
  title_card: string;
  description_card: string;
  start_date: string;
  end_date: string;
  status_id: string;
  onClick: () => void;
}
export default function CardTask({
  title_card,
  description_card,
  start_date,
  end_date,
  status_id,
  onClick,
}: ICardTaskProps): React.ReactNode {
  console.log("status", status_id);
  return (
    <div className="content-card-task" onClick={onClick}>
      <div className="task">
        <div className="task-left">
          <h4
            className="left-title"
            style={
              status_id === "closed"
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {title_card}
          </h4>
          <p className="left-paragraph">{description_card}</p>
        </div>
        <IconCheck className="task-icon" />
      </div>
      <div className="task-down">
        <div className="down-left">
          <p className="left">
            <span className="left-span">Start date</span>
            {start_date}
          </p>
          <p className="left">
            <span className="left-span left-span-down">End date</span>
            {end_date}
          </p>
        </div>
        <div className="down-right">
          <Avatar
            alt_image="image_random"
            url_image="/images/avatar_random.jpg"
          />
        </div>
      </div>
    </div>
  );
}
