import "./infoSetting.styles.scss";
import { ItemCard } from "@/ui/atoms";
import {
  IconArrowRight,
  IconDocument,
  IconUser,
} from "@/assets/icons";
import { IInfoSettingData } from "@/app/core/application/interfaces";

export default function InfoSetting(): React.ReactNode {
  const dataInfoSettings: IInfoSettingData[] = [
    {
      iconFirst: <IconUser />,
      text: "User",
      width: "30%",
      backgroundColor: "var(--color-white)",
    },
    {
      text: "Email",
      iconSecond: <IconArrowRight />,
      width: "65.9%",
      backgroundColor: "var(--color-white)",
    },
    {
      text: "About Me",
      width: "100%",
      iconSecond: <IconArrowRight />,
      backgroundColor: "var(--color-white)",
    },
    {
      iconFirst: <IconDocument />,
      text: "Doc",
      width: "23.9%",
      backgroundColor: "var(--color-white)",
    },
    {
      text: "Address",
      width: "72%",
      iconSecond: <IconArrowRight />,
      backgroundColor: "var(--color-white)",
    },
    {
      text: "Role",
      width: "20%",
      iconSecond: <IconArrowRight />,
      backgroundColor: "var(--color-white)",
    },
    {
      text: "City",
      width: "20%",
      iconSecond: <IconArrowRight />,
      backgroundColor: "var(--color-white)",
    },
    {
      text: "Level",
      width: "50.9%",
      iconSecond: <IconArrowRight />,
      backgroundColor: "var(--color-white)",
    },
  ];
  return (
    <div className="content-info-setting">
      {dataInfoSettings.map((item: IInfoSettingData, index: number) => (
        <ItemCard
          iconFirst={item.iconFirst}
          text={item.text}
          iconSecond={item.iconSecond}
          key={index}
          width={item.width}
          backgroundColor={item.backgroundColor}
        />
      ))}
    </div>
  );
}
