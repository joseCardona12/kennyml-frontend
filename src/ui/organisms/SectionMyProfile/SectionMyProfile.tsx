"use client";
import { InfoNameUser, ModalAccount } from "@/ui/molecules";
import "./sectionMyProfile.styles.scss";
import { IActionUser } from "@/app/core/application/interfaces";
import { IconArrowRight } from "@/assets/icons";
import { useEffect, useState } from "react";
import UtilApp from "@/app/core/application/util/utilApplication.util";
import { ILoginResponse } from "@/app/core/application/dtos";
import { useModalAccountState } from "@/app/core/application/global-state";

export default function SectionMyProfile(): React.ReactNode {
  const { showModal } = useModalAccountState((state) => state);
  const [userCookie, setUserCookie] = useState<ILoginResponse>();
  const dataInfoName: IActionUser[] = [
    {
      icon: <></>,
      infoAction: "",
      paragraph: "First name",
      title: "Name",
      borderBottom: "1px solid var(--color-gray-light)",
    },
    {
      icon: <></>,
      infoAction: "",
      paragraph: "Second name",
      title: "LastName",
      borderBottom: "1px solid var(--color-gray-light)",
    },
    {
      icon: <IconArrowRight />,
      infoAction: `${
        userCookie?.user.email ? userCookie.user.email : "Loading..."
      }`,
      paragraph: "",
      title: "Email",
      borderBottom: "1px solid var(--color-gray-light)",
      urlPage: "email-edit",
    },
    {
      icon: <IconArrowRight />,
      infoAction: `${
        userCookie?.user.cellphone ? userCookie.user.cellphone : "Loading..."
      }`,
      paragraph: "",
      title: "Cellphone",
      borderBottom: "1px solid var(--color-gray-light)",
      urlPage: "cellphone-edit",
    },
    {
      icon: <IconArrowRight />,
      infoAction: `${
        userCookie?.user.document_number
          ? userCookie.user.document_number
          : "Loading..."
      }`,
      paragraph: "",
      title: "Document number",
      borderBottom: "",
      urlPage: "documentnumber-edit",
    },
  ];

  const dataInfoAddress: IActionUser[] = [
    {
      icon: <></>,
      infoAction: `${
        userCookie?.user.address ? userCookie.user.address : "Loading..."
      }`,
      paragraph: "",
      title: "Address",
      borderBottom: "1px solid var(--color-gray-light)",
    },
    {
      icon: <IconArrowRight />,
      infoAction: "",
      paragraph: "Info Name",
      title: "About Me",
      borderBottom: "1px solid var(--color-gray-light)",
      urlPage: "aboutme-edit",
    },
    {
      icon: <IconArrowRight />,
      infoAction: "",
      paragraph: "Account password",
      title: "Password",
      borderBottom: "1px solid var(--color-gray-light)",
      urlPage: "password-edit",
    },
    {
      icon: <IconArrowRight />,
      infoAction: "",
      paragraph: "UpLoad Image document",
      title: "Image",
      borderBottom: "",
      urlPage: "image-edit",
    },
  ];

  const dataInfoIds: IActionUser[] = [
    {
      icon: <IconArrowRight />,
      infoAction: "",
      paragraph: "1. TI, 2.CC",
      title: "Type document ID",
      borderBottom: "1px solid var(--color-gray-light)",
      urlPage: "documentid-edit",
    },
    {
      icon: <IconArrowRight />,
      infoAction: "",
      paragraph: "1.ADMIN, 2.USER, 3.SUPERADMIN",
      title: "Role ID",
      borderBottom: "1px solid var(--color-gray-light)",
      urlPage: "roleid-edit",
    },
    {
      icon: <IconArrowRight />,
      infoAction: "",
      paragraph: "1.Explorer, 2.Adventurer, 3.Challenger",
      title: "Level ID",
      borderBottom: "1px solid var(--color-gray-light)",
      urlPage: "levelid-edit",
    },
    {
      icon: <IconArrowRight />,
      infoAction: "",
      paragraph: "1.Medellín, 2.Bello",
      title: "City ID",
      borderBottom: "1px solid var(--color-gray-light)",
      urlPage: "cityid-edit",
    },
    {
      icon: <IconArrowRight />,
      infoAction: "",
      paragraph: "Show all codes",
      title: "Code Verification ID",
      borderBottom: "",
    },
  ];

  useEffect(() => {
    const cookies = UtilApp.getCookies("user-credentials-login");
    if (!cookies) {
      console.error("No found the cookie 'user-credentials-login'");
      return;
    }

    try {
      const parsedCookies = JSON.parse(cookies);
      setUserCookie(parsedCookies);
    } catch (error) {
      console.error("Error al parsear la cookie:", error);
    }
  }, []);
  return (
    <div className="content-my-profile">
      <InfoNameUser data={dataInfoName} />
      <InfoNameUser data={dataInfoAddress} />
      <InfoNameUser data={dataInfoIds} />
      {showModal.state && (
        <ModalAccount
          paragraph=""
          title={showModal.name}
          name={showModal.name}
          onChange={() => console.log("onchange")}
          placeholder=""
          type=""
          value=""
          handleSave={() => console.log("save")}
        />
      )}
    </div>
  );
}
