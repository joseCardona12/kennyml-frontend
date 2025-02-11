"use client";
import { useModalState } from "@/app/core/application/global-state";
import { IConArrowLeft } from "@/assets/icons";
import { SectionEditEmail } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";
import React, { useState } from "react";

export default function PasswordEditView() {
  const [passwordUser, setPasswordUser] = useState<string>("");
  const { showModal, setShowModal } = useModalState((state) => state);

  const handleClick = (): void => {
    if (!passwordUser) {
      setShowModal({
        state: !showModal.state,
        message: "Is required Password",
        statusCode: 400,
      });
      return;
    }
    console.log("password", passwordUser);
  };
  return (
    <DashboardTemplateV2
      section={
        <SectionEditEmail
          name="password"
          onChange={(e) => setPasswordUser(e.target.value)}
          placeholder="Enter new Password"
          textButton="Change Password"
          type="text"
          value={passwordUser}
          onClick={handleClick}
        />
      }
      icon={<IConArrowLeft />}
      title_section="Password edit"
      url_image="/images/avatar_random.jpg"
      url_back="/dashboard/account/my-profile"
    />
  );
}
