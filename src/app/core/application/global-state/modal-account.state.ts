import { create } from "zustand";

interface IModal {
  name: string;
  placeholder: string;
  value: string;
  state: boolean;
}
interface IModalAccountState {
  showModal: IModal;
  setShowModal: (value: IModal) => void;
}

export const useModalAccountState = create<IModalAccountState>((set) => ({
  showModal: {
    name: "",
    placeholder: "",
    value: "",
    state: false,
  },
  setShowModal: (value: IModal) => set(() => ({ showModal: value })),
}));
