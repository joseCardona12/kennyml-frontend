import { create } from "zustand";

interface IStatusState {
  status: string;
  setStatus: (value: string) => void;
}

export const useStatusState = create<IStatusState>((set) => ({
  status: "",
  setStatus: (value: string) => set(() => ({ status: value })),
}));
