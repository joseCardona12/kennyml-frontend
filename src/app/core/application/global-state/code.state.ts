import { create } from "zustand";
import { ICode } from "../interfaces";

interface ICodeState {
  codes: ICode[];
  setCodes: (value: ICode[]) => void;
}

export const useCodeState = create<ICodeState>((set) => ({
  codes: [{ code: "" }],
  setCodes: (value: ICode[]) => set(() => ({ codes: value })),
}));
