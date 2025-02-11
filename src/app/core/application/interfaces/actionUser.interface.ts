import { ReactElement } from "react";

export interface IActionUser {
  icon?: ReactElement;
  infoAction: string;
  paragraph: string;
  title: string;
  urlPage?: string;
  borderBottom?: string;
}
