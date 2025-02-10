import { IUser } from "../../interfaces";

export interface IRegisterResponse {
  message: string;
  statusCode: number;
  token: string;
  user: IUser;
}
