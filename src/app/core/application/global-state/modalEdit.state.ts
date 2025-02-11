import { create } from "zustand";

interface IModalEditState {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const useModalEditState = create<IModalEditState>((set) => ({
  showModal: false,
  setShowModal: (value: boolean) => set(() => ({ showModal: value })),
}));
