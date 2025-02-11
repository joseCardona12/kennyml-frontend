"use client";
import { AvatarV2 } from "@/ui/atoms";
import "./accountInfo.styles.scss";
import { useEffect, useState } from "react";
import UtilApp from "@/app/core/application/util/utilApplication.util";
import { IRegisterResponse } from "@/app/core/application/dtos";

export default function AccountInfo(): React.ReactNode {
  const [userCookie, setUserCookie] = useState<IRegisterResponse>({
    message: "",
    statusCode: 0,
    token: "",
    user: {
      about_me: "",
      address: "",
      cellphone: "",
      city_id: 0,
      code_verification_id: 0,
      document_number: "",
      email: "",
      id: 0,
      lastName: "",
      level_id: 0,
      name: "",
      password: "",
      role_id: 0,
      type_document_id: 0,
      url_image: "",
    },
  });
  const [colorBackground, setColorBackground] = useState<number>(0);
  const colors: string[] = [
    "var(--color-red)",
    "var(--color-yellow)",
    "var(--color-blue)",
    "var(--color-green)",
  ];

  const { user } = userCookie;

  const handleClickColor = (): void => {
    if (colorBackground <= colors.length) {
      setColorBackground(colorBackground + 1);
    } else {
      setColorBackground(0);
    }
  };

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
    <div className="content-account-info">
      <div
        className="info-image"
        onClick={handleClickColor}
        style={{ backgroundColor: colors[colorBackground] }}
      ></div>
      <div className="info">
        <AvatarV2 name="Jose" />
        <div className="info-user">
          <h4 className="user-name-random">
            NickName
            {user.code_verification_id
              ? user.code_verification_id + user.id + user.role_id
              : "1234567890"}
          </h4>
          <p className="user-account">
            Account: {user.email ? user.email : "example***@gmail.com"}
          </p>
        </div>
      </div>
    </div>
  );
}
