import "./itemMenu.styles.scss";
import Link from "next/link";
import { ReactElement } from "react";

interface IItemMenuProps {
  icon: ReactElement;
  text: string;
  url_item: string;
}
export default function ItemMenu({
  icon,
  text,
  url_item,
}: IItemMenuProps): React.ReactNode {
  return (
    <li className="item-menu">
      <Link href={url_item} className="menu-link">
        <span className="menu-icon">{icon}</span>
        {text}
      </Link>
    </li>
  );
}
