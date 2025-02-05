import { create } from "zustand";

interface IItemNavState {
  itemNavSelect: string;
  setItemNavSelect: (value: string) => void;
}

export const useItemNav = create<IItemNavState>((set) => ({
  itemNavSelect: "",
  setItemNavSelect: (value: string) => set(() => ({ itemNavSelect: value })),
}));
