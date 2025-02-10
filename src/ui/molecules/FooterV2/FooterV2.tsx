"use client";
import { IFooterData } from "@/app/core/application/interfaces";
import "./footerV2.styles.scss";
import { FooterItem } from "@/ui/atoms";
import { useState } from "react";
import { useFooterItemState } from "@/app/core/application/global-state";

interface IFooterV2Props {
  data: IFooterData[];
}
export default function FooterV2({ data }: IFooterV2Props): React.ReactNode {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const { setFooterItem } = useFooterItemState((state) => state);

  const handleItemClick = (name: string): void => {
    setActiveItem(activeItem === name ? null : name);
    setFooterItem(name);
  };
  return (
    <footer className="content-footerV2">
      {data.map((element: IFooterData, index: number) => (
        <FooterItem
          icon={element.icon}
          name={element.name}
          url={element.url}
          key={index}
          isActive={activeItem === `Item${index + 1}`}
          onClick={() => handleItemClick(`Item${index + 1}`)}
        />
      ))}
    </footer>
  );
}
