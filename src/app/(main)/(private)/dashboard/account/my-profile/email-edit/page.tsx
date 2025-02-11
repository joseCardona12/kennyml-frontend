"use client";
import { useModalState } from "@/app/core/application/global-state";
import { IConArrowLeft } from "@/assets/icons";
import { SectionEditEmail } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";
import React, { useState } from "react";

export default function EmailEditView() {
  const [emailUser, setEmailUser] = useState<string>("");
  const { showModal, setShowModal } = useModalState((state) => state);

  const handleClick = (): void => {
    if (!emailUser) {
      setShowModal({
        state: !showModal.state,
        message: "Is required email",
        statusCode: 400,
      });
      return;
    }
    console.log("email", emailUser);
  };
  return (
    <DashboardTemplateV2
      section={
        <SectionEditEmail
          name="Email"
          onChange={(e) => setEmailUser(e.target.value)}
          placeholder="Enter email"
          textButton="Change email"
          type="email"
          value={emailUser}
          onClick={handleClick}
        />
      }
      icon={<IConArrowLeft />}
      title_section="Email edit"
      url_image="/images/avatar_random.jpg"
      url_back="/dashboard/account/my-profile"
    />
  );
}
