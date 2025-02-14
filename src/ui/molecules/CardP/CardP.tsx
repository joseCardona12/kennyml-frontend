"use client";
import { Button } from "@/ui/atoms";
import "./cardP.styles.scss";
import { IconEye, IconTrash, IconUpdate } from "@/assets/icons";
import { useRouter } from "next/navigation";
import { useModalDeleteState } from "@/app/core/application/global-state";

interface ICardPProps {
  id?: string;
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
  id,
  title,
  description,
  quantity,
  unit,
  place,
  backgroundColor,
  backgrounColorPlace,
  date_creation,
}: ICardPProps): React.ReactNode {
  const router = useRouter();
  const { setModal } = useModalDeleteState((state) => state);

  const handleUpdateProduct = (): void => {};

  const handleDeleteProduct = (): void => {
    setModal({
      id: id!.toString(),
      status: true,
    });
  };

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
      <div className="cardP-unit-group">
        <p
          className="cardP-place"
          style={{ backgroundColor: backgrounColorPlace }}
        >
          {place}
        </p>
        <div className="cardP-unit-group-buttons">
          <Button
            text={<IconUpdate />}
            type="button"
            backgroundColor="var(--color-green)"
            onClick={handleUpdateProduct}
            textHover="Update product"
          />
          <Button
            text={<IconEye />}
            type="button"
            backgroundColor="var(--color-blue)"
            onClick={() => router.push(`/dashboard/product/${id}`)}
            textHover="Show specific product"
          />
          <Button
            text={<IconTrash />}
            type="button"
            backgroundColor="var(--color-red)"
            textHover="Delete product"
            onClick={handleDeleteProduct}
          />
        </div>
      </div>
    </div>
  );
}
