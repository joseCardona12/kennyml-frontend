"use client";
import { Button, Input, InputUser, Modal } from "@/ui/atoms";
import "./modalDelete.styles.scss";
import { IconErrorMessage } from "@/assets/icons";
import { useState } from "react";
import { useModalDeleteState } from "@/app/core/application/global-state";
import { ProductService } from "@/app/infrastructure/services";
import { useRouter } from "next/navigation";

export default function ModalDelete(): React.ReactNode {
  const router = useRouter();
  const [confirm, setConfirm] = useState<string>("");
  const { modal, setModal } = useModalDeleteState((state) => state);

  const handleDelete = async (): Promise<void> => {
    if (confirm !== "confirm") return;
    const res = await ProductService.deleteProduct(parseInt(modal.id));
    console.log("res", res);
    console.log("ook");
    setModal({
      ...modal,
      status: false,
    });
    router.refresh();
  };
  return (
    <div className="content-modal">
      <div className="modal">
        <span className="modal-icon">
          <IconErrorMessage />
        </span>
        <h2 className="modal-title">Are you sure?</h2>
        <InputUser
          name="confirm"
          placeholder="Enter confirm"
          type="text"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <div className="modal-buttons">
          <Button
            text={"Cancel"}
            type="button"
            backgroundColor="var(--color-gray)"
            onClick={() =>
              setModal({
                ...modal,
                status: false,
              })
            }
            width="50%"
          />
          <Button
            text={"Delete"}
            type="button"
            backgroundColor="var(--color-red)"
            width="50%"
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
