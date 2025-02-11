import "./cardP.styles.scss";

interface ICardPProps {
  title: string;
  description: string;
  quantity: string;
  unit: string;
  place: string;
  backgroundColor?: string;
  backgrounColorPlace?: string;
  date_creation?: string;
}
export default function CardP({
  title,
  description,
  quantity,
  unit,
  place,
  backgroundColor,
  backgrounColorPlace,
  date_creation,
}: ICardPProps): React.ReactNode {
  return (
    <div className="content-cardP" style={{ backgroundColor }}>
      <div className="cardP-title">
        <h5 className="title">{title}</h5>
        <p className="title-date">
          <strong>Date: </strong>
          {date_creation}
        </p>
      </div>
      <p className="cardP-description"> {description}</p>
      <p className="cardP-quantity">Quantity: {quantity}</p>
      <p className="cardP-unit">Unit: {unit}</p>
      <p
        className="cardP-place"
        style={{ backgroundColor: backgrounColorPlace }}
      >
        {place}
      </p>
    </div>
  );
}
