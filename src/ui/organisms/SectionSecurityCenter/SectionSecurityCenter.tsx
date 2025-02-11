"use client";
import { InfoNameUser } from "@/ui/molecules";
import "./sectionSecurityCenter.styles.scss";
import { IActionUser } from "@/app/core/application/interfaces";
import { IconArrowRight } from "@/assets/icons";
import { useRouter } from "next/navigation";

export default function SectionSecurityCenter(): React.ReactNode {
  const router = useRouter();
  const handleClick = (): void => {
    router.push("/dashboard/account/security-center/change-password");
  };
  const dataChangePassword: IActionUser[] = [
    {
      infoAction: "",
      paragraph: "",
      title: "Change password",
      borderBottom: "",
      icon: <IconArrowRight />,
    },
  ];
  return (
    <div className="content-section-security-center" onClick={handleClick}>
      <InfoNameUser data={dataChangePassword} />
    </div>
  );
}
