import { create } from "zustand";

interface IMenuState {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}

export const useMenuState = create<IMenuState>((set) => ({
  showMenu: false,
  setShowMenu: (value: boolean) => set(() => ({ showMenu: value })),
}));
