import { create } from "zustand";
import { ILoginResponse, IRegisterResponse } from "../dtos";

interface IAuthUserState {
  data: ILoginResponse | IRegisterResponse;
  setData: (value: ILoginResponse | IRegisterResponse) => void;
}

export const useAuthUserState = create<IAuthUserState>((set) => ({
  data: {
    message: "",
    statusCode: 0,
    token: "",
    user: {
      about_me: "",
      address: "",
      cellphone: "",
      city_id: 1,
      code_verification_id: 1,
      document_number: "",
      email: "",
      id: 0,
      lastName: "",
      level_id: 1,
      name: "",
      password: "",
      role_id: 2,
      type_document_id: 2,
      url_image: "",
    },
  },
  setData: (value: ILoginResponse | IRegisterResponse) =>
    set(() => ({ data: value })),
}));
