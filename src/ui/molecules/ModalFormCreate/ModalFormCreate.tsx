"use client";
import {
  IPlace,
  IProduct,
  IStatus,
  IUnit,
} from "@/app/core/application/interfaces";
import { GroupInputProduct, GroupSelectUser } from "..";
import "./modalFormCreate.styles.scss";

import { Button, Modal } from "@/ui/atoms";
import {
  useModalCreateProduct,
  useModalEditState,
} from "@/app/core/application/global-state";
import { useState } from "react";
import UtilApp from "@/app/core/application/util/utilApplication.util";
import { IconEye } from "@/assets/icons";
import { ILoginResponse } from "@/app/core/application/dtos";
import { ProductService } from "@/app/infrastructure/services";
import { useRouter } from "next/navigation";

interface IModalCreateProps {
  places: IPlace[];
  status: IStatus[];
  units: IUnit[];
}
export default function ModalFormCreate({
  places,
  status,
  units,
}: IModalCreateProps): React.ReactNode {
  const router = useRouter();
  const { showModal, setShowModal } = useModalEditState((state) => state);
  const {
    showModal: showModalCreateProduct,
    setShowModal: setShowModalCreateProduct,
  } = useModalCreateProduct((state) => state);
  const [formDataCreate, setFormDataCreate] = useState<IProduct>({
    title: "",
    description: "",
    quantity: 0,
    start_date: "",
    end_date: "",
    place_id: "D1",
    status_id: "open",
    unit_id: "package",
    user_id: 0,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormDataCreate({
      ...formDataCreate,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formDataCreate.title ||
      !formDataCreate.description ||
      !formDataCreate.quantity ||
      !formDataCreate.start_date ||
      !formDataCreate.end_date ||
      !formDataCreate.place_id ||
      !formDataCreate.status_id ||
      !formDataCreate.unit_id
    ) {
      setShowModalCreateProduct({
        state: true,
        message: "Error, Is required all params",
        statusCode: 400,
      });
      return;
    }
    const credentialsUser = UtilApp.getCookies("user-credentials");
    if (!credentialsUser) {
      setShowModalCreateProduct({
        state: true,
        message:
          "Error to get Auth user. Please contact with the administrator",
        statusCode: 400,
      });
      return;
    }
    const authUser = credentialsUser as ILoginResponse;
    const partialProduct: IProduct = {
      title: formDataCreate.title,
      description: formDataCreate.description,
      quantity: formDataCreate.quantity,
      start_date: formDataCreate.start_date,
      end_date: formDataCreate.end_date,
      place_id: formDataCreate.place_id === "D1" ? "1" : "2",
      status_id: formDataCreate.status_id === "open" ? "1" : "2",
      unit_id: formDataCreate.unit_id === "package" ? "1" : "2",
      user_id: authUser?.user?.id,
    };
    const data = await ProductService.createProduct(partialProduct);
    setShowModalCreateProduct({
      state: true,
      message: data.message,
      statusCode: data.statusCode,
    });
    router.refresh();
  };
  return (
    <div className="product-create">
      <div className="create">
        <form className="create-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Create product</h2>
          <div className="create-inputs">
            <GroupInputProduct
              label="Title"
              name="title"
              onChange={handleChange}
              placeholder="Enter title"
              type="text"
              value={formDataCreate.title}
            />
            <GroupInputProduct
              label="Description"
              name="description"
              onChange={handleChange}
              placeholder="Enter description"
              type="text"
              value={formDataCreate.description}
            />
            <GroupInputProduct
              label="Quantity"
              name="quantity"
              onChange={handleChange}
              placeholder="Enter quantity"
              type="number"
              value={formDataCreate.quantity.toString()}
            />
            <GroupInputProduct
              label="Start date"
              name="start_date"
              onChange={handleChange}
              placeholder="Enter start date"
              type="date"
              value={formDataCreate.start_date}
            />
            <GroupInputProduct
              label="End date"
              name="end_date"
              onChange={handleChange}
              placeholder="Enter end date"
              type="date"
              value={formDataCreate.end_date}
            />
            <GroupSelectUser
              id="unit"
              label="Units"
              name="unit_id"
              onChange={handleChange}
              options={units}
              value={formDataCreate.unit_id}
              width="100%"
            />
            <GroupSelectUser
              id="status"
              label="Status"
              name="status_id"
              onChange={handleChange}
              options={status}
              value={formDataCreate.status_id}
              width="100%"
            />
            <GroupSelectUser
              id="place"
              label="Places"
              name="place_id"
              onChange={handleChange}
              options={places}
              value={formDataCreate.place_id}
              width="100%"
            />
          </div>
          <div className="form-buttons">
            <Button
              text="Cancel"
              type="button"
              onClick={() => setShowModal(!showModal)}
              backgroundColor="var(--color-gray)"
            />
            <Button text="Create" type="submit" />
          </div>
        </form>
      </div>
      {showModalCreateProduct.state && (
        <Modal
          text={showModalCreateProduct.message}
          icon={<IconEye />}
          statusCode={showModalCreateProduct.statusCode}
        />
      )}
    </div>
  );
}
