import { create } from "zustand";
import { ICode } from "../interfaces";

interface IError {
  message: string;
  statusCode: number;
  state: boolean;
}
interface IErrorState {
  error: IError;
  setError: (value: IError) => void;
}

export const useErrorState = create<IErrorState>((set) => ({
  error: {
    message: "",
    statusCode: 0,
    state: false,
  },
  setError: (value: IError) => set(() => ({ error: value })),
}));
