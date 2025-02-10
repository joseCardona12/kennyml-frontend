import { create } from "zustand";

interface IModal {
  state: boolean;
  message: string;
  statusCode: number;
}
interface IModalState {
  showModal: IModal;
  setShowModal: (value: IModal) => void;
}

export const useModalState = create<IModalState>((set) => ({
  showModal: {
    state: false,
    message: "",
    statusCode: 0,
  },
  setShowModal: (value: IModal) => set(() => ({ showModal: value })),
}));
