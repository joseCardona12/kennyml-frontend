import { create } from "zustand";

interface IModalShoppingState {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
}

export const useModalShoppingState = create<IModalShoppingState>((set) => ({
    showModal: false,
    setShowModal: (value: boolean) => set(() => ({ showModal: value })),
}));
