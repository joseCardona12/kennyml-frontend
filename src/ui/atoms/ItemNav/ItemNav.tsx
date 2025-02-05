"use client";
import { useState } from "react";
import "./itemNav.styles.scss";
import { useItemNav } from "@/app/core/application/global-state/itemNav.state";

interface IItemNavProps {
  item_name: string;
  count: string;
}
export default function ItemNav({
  item_name,
  count,
}: IItemNavProps): React.ReactNode {
  const { setItemNavSelect } = useItemNav((state) => state);

  const handleClick = (): void => {
    setItemNavSelect(item_name);
  };
  return (
    <li className="item-nav" onClick={handleClick}>
      {item_name}
      <span className="nav-count">{count}</span>
    </li>
  );
}
