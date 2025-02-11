"use client";

import {
  useModalEditState,
} from "@/app/core/application/global-state";
import "./sectionProduct.styles.scss";
import { IDataCardP } from "@/app/core/application/interfaces";
import { Button } from "@/ui/atoms";
import { ModalFormCreate } from "@/ui/molecules";
import CardP from "@/ui/molecules/CardP/CardP";

export default function SectionProduct(): React.ReactNode {
  const { showModal, setShowModal } = useModalEditState((state) => state);

  const dataCards: IDataCardP[] = [
    {
      title: "Rice",
      description: "Rice is",
      place: "D1",
      quantity: "23",
      unit: "Package",
      backgroundColor: "var(--color-white)",
      data_creation: "11/02/2025",
      backgroundColorPlace: "var(--color-red-light)",
    },
    {
      title: "Rice",
      description: "Rice is",
      place: "D1",
      quantity: "23",
      unit: "Package",
      backgroundColor: "var(--color-white)",
      data_creation: "11/02/2025",
      backgroundColorPlace: "var(--color-green-light)",
    },
    {
      title: "Rice",
      description: "Rice is",
      place: "SUPERMARKET",
      quantity: "23",
      unit: "Package",
      backgroundColor: "var(--color-white)",
      data_creation: "11/02/2025",
      backgroundColorPlace: "var(--color-yellow-light)",
    },
  ];

  const handleClick = (): void => {
    setShowModal(!showModal);
  };
  return (
    <div className="content-section-product">
      {/* <ModalFormCreate /> */}
      <div className="product-button" onClick={handleClick}>
        <Button text="+" type="button" />
      </div>
      {dataCards.map((card: IDataCardP, index: number) => (
        <CardP
          title={card.title}
          description={card.description}
          quantity={card.quantity}
          place={card.place}
          unit={card.unit}
          backgroundColor={card.backgroundColor}
          date_creation={card.data_creation}
          backgrounColorPlace={card.backgroundColorPlace}
          key={index}
        />
      ))}
      {showModal && <ModalFormCreate />}
    </div>
  );
}
