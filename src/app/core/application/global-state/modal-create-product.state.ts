import { create } from "zustand";

interface IModalCreateProduct {
  state: boolean;
  message: string;
  statusCode: number;
}
interface IModalCreateProductState {
  showModal: IModalCreateProduct;
  setShowModal: (value: IModalCreateProduct) => void;
}

export const useModalCreateProduct = create<IModalCreateProductState>(
  (set) => ({
    showModal: {
      state: false,
      message: "",
      statusCode: 0,
    },
    setShowModal: (value: IModalCreateProduct) =>
      set(() => ({ showModal: value })),
  })
);
