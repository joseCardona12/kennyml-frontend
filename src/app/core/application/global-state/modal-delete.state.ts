import { create } from "zustand";

interface IModal {
  id: string;
  status: boolean;
}
interface IModalDeleteState {
  modal: IModal;
  setModal: (value: IModal) => void;
}

export const useModalDeleteState = create<IModalDeleteState>((set) => ({
  modal: {
    id: "",
    status: false,
  },
  setModal: (value: IModal) => set(() => ({ modal: value })),
}));
