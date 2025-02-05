"use client";
import "./menu.styles.scss";
import { IMenu } from "@/app/core/application/interfaces";
import { ItemMenu } from "@/ui/molecules";

interface IMenuProps {
  items: IMenu[];
}
export default function Menu({ items }: IMenuProps): React.ReactNode {
  return (
    <div className="content-menu">
      <nav className="menu">
        <ul className="menu-content">
          {items.map((item: IMenu, index: number) => (
            <ItemMenu
              icon={item.icon}
              text={item.item}
              url_item={item.url_item}
              key={index}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}
