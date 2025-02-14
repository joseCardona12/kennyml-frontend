"use client";

import { useModalDeleteState, useModalEditState } from "@/app/core/application/global-state";
import "./sectionProduct.styles.scss";
import {
  IPlace,
  IProduct,
  IStatus,
  IUnit,
} from "@/app/core/application/interfaces";
import { Button } from "@/ui/atoms";
import { ModalDelete, ModalFormCreate } from "@/ui/molecules";
import CardP from "@/ui/molecules/CardP/CardP";
import { IconPlus } from "@/assets/icons";

interface ISectionProductProps {
  products: IProduct[];
  places: IPlace[];
  units: IUnit[];
  status: IStatus[];
}
export default function SectionProduct({
  products,
  places,
  units,
  status,
}: ISectionProductProps): React.ReactNode {
  const { showModal, setShowModal } = useModalEditState((state) => state);
  const {modal} = useModalDeleteState((state)=>state);

  const handleClick = (): void => {
    setShowModal(!showModal);
  };
  return (
    <div className="content-section-product">
      <div className="product-button" onClick={handleClick}>
        <Button text={<IconPlus />} type="button" width="100%" />
      </div>
      {products.map((card: IProduct, index: number) => (
        <CardP
          id={card.id}
          title={card.title}
          description={card.description}
          quantity={card.quantity.toString()}
          place={card.place_id == "1" ? "D1" : "SUPERMARKET"}
          unit={card.unit_id == "1" ? "package" : "box"}
          backgroundColor={"var(--color-white)"}
          date_creation={card.start_date}
          backgrounColorPlace={"var(--color-red-light)"}
          key={index}
        />
      ))}
      {showModal && (
        <ModalFormCreate places={places} units={units} status={status} />
      )}
      {modal.status && (
        <ModalDelete />
      )}
    </div>
  );
}
