import { useMenuState } from "@/app/core/application/global-state";
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
  const { showMenu, setShowMenu } = useMenuState((state) => state);

  const handleClick = (): void => {
    setShowMenu(!showMenu);
  };
  return (
    <li className="item-menu" onClick={handleClick}>
      <Link href={url_item} className="menu-link">
        <span className="menu-icon">{icon}</span>
        {text}
      </Link>
    </li>
  );
}
