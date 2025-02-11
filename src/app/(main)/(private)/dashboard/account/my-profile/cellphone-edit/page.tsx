"use client";
import { useModalState } from "@/app/core/application/global-state";
import { IConArrowLeft } from "@/assets/icons";
import { SectionEditEmail } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";
import React, { useState } from "react";

export default function CellphoneEditView() {
  const [cellphoneUser, setCellphoneUser] = useState<string>("");
  const { showModal, setShowModal } = useModalState((state) => state);

  const handleClick = (): void => {
    if (!cellphoneUser) {
      setShowModal({
        state: !showModal.state,
        message: "Is required cellphone",
        statusCode: 400,
      });
      return;
    }
    console.log("cellphone", cellphoneUser);
  };
  return (
    <DashboardTemplateV2
      section={
        <SectionEditEmail
          name="Cellphone"
          onChange={(e) => setCellphoneUser(e.target.value)}
          placeholder="Enter cellphone"
          textButton="Change Cellphone"
          type="text"
          value={cellphoneUser}
          onClick={handleClick}
        />
      }
      icon={<IConArrowLeft />}
      title_section="Cellphone edit"
      url_image="/images/avatar_random.jpg"
      url_back="/dashboard/account/my-profile"
    />
  );
}
