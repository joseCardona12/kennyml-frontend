import { create } from "zustand";

interface IModalState {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const useModalState = create<IModalState>((set) => ({
  showModal: false,
  setShowModal: (value: boolean) => set(() => ({ showModal: value })),
}));
