"use client";

import "./header.styles.scss";
import { Brand } from "@/ui/atoms";
import { AvatarUser } from "@/ui/molecules";
import {
  IconClose,
  IconDashboard,
  IconHamburger,
  IconHome,
  IconSettings,
  IconShopping,
} from "@/assets/icons";
import { useMenuState } from "@/app/core/application/global-state";
import { IMenu } from "@/app/core/application/interfaces";
import Menu from "../Menu/Menu";

export default function Header(): React.ReactNode {
  const { showMenu, setShowMenu } = useMenuState((state) => state);

  const dataMenu: IMenu[] = [
    { icon: <IconHome />, item: "Home", url_item: "/dashboard" },
    { icon: <IconDashboard />, item: "Resume", url_item: "/resume" },
    { icon: <IconShopping />, item: "Shopping", url_item: "/shopping" },
    { icon: <IconSettings />, item: "Settings", url_item: "/settings" },
  ];

  const handleClickIcon = (): void => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };
  return (
    <header className="header">
      <Brand brand="Kennyml" />
      <div className="header-right">
        <AvatarUser
          alt_image="image_user"
          url_image="/images/avatar_random.jpg"
          user_name="Kenny"
        />
        <span
          className="right-icon"
          onClick={handleClickIcon}
          style={
            showMenu
              ? { padding: "var(--padding-big)", color: "var(--color-red)" }
              : { padding: "0" }
          }
        >
          {showMenu ? <IconClose /> : <IconHamburger />}
        </span>
      </div>
      {showMenu && <Menu items={dataMenu} />}
    </header>
  );
}
