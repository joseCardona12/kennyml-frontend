"use client";
import { useModalState } from "@/app/core/application/global-state";
import { IConArrowLeft } from "@/assets/icons";
import { SectionEditEmail } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";
import React, { useState } from "react";

export default function DocumentNumberEditView() {
  const [documentNumberUser, setDocumentNumberUser] = useState<string>("");
  const { showModal, setShowModal } = useModalState((state) => state);

  const handleClick = (): void => {
    if (!documentNumberUser) {
      setShowModal({
        state: !showModal.state,
        message: "Is required Document number",
        statusCode: 400,
      });
      return;
    }
    console.log("document number", documentNumberUser);
  };
  return (
    <DashboardTemplateV2
      section={
        <SectionEditEmail
          name="documentNumber"
          onChange={(e) => setDocumentNumberUser(e.target.value)}
          placeholder="Enter Document Number"
          textButton="Change Document Number"
          type="text"
          value={documentNumberUser}
          onClick={handleClick}
        />
      }
      icon={<IConArrowLeft />}
      title_section="Doc Number edit"
      url_image="/images/avatar_random.jpg"
      url_back="/dashboard/account/my-profile"
    />
  );
}
