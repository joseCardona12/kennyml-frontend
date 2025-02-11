"use client";
import { ISelect } from "@/app/core/application/interfaces";
import { GroupInputProduct, GroupSelectUser } from "..";
import "./modalFormCreate.styles.scss";

import { Button, InputUser } from "@/ui/atoms";
import { useModalEditState } from "@/app/core/application/global-state";

export default function ModalFormCreate(): React.ReactNode {
  const { showModal, setShowModal } = useModalEditState((state) => state);

  const dataSelect: ISelect[] = [
    { text: "Package", value: "package" },
    { text: "Lb", value: "libra" },
    { text: "Kl", value: "kilo" },
    { text: "Package", value: "package" },
  ];
  return (
    <div className="product-create">
      <div className="create">
        <form className="create-form">
          <div className="form-image">
            <InputUser
              name=""
              placeholder=""
              type="file"
              value=""
              onChange={() => console.log("edit")}
            />
          </div>
          <div className="create-inputs">
            <GroupInputProduct
              label="Description"
              name="description"
              onChange={() => console.log("on")}
              placeholder="Enter description"
              type="text"
              value=""
            />
            <GroupInputProduct
              label="Description"
              name="description"
              onChange={() => console.log("on")}
              placeholder="Enter description"
              type="text"
              value=""
            />
            <GroupSelectUser
              id=""
              label="Units"
              name=""
              onChange={() => console.log("change")}
              options={dataSelect}
              value=""
              width="100%"
            />
            <GroupSelectUser
              id=""
              label="Places"
              name=""
              onChange={() => console.log("change")}
              options={dataSelect}
              value=""
              width="100%"
            />
          </div>
          <div className="form-buttons">
            <Button
              text="Cancel"
              type="submit"
              onClick={() => setShowModal(!showModal)}
            />
            <Button text="Create" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
