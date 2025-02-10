import { create } from "zustand";

interface IFooterItemState {
  footerItem: string;
  setFooterItem: (value: string) => void;
}

export const useFooterItemState = create<IFooterItemState>((set) => ({
  footerItem: "",
  setFooterItem: (value: string) => set(() => ({ footerItem: value })),
}));
