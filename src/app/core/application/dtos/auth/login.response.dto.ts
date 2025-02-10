import { IUser } from "@/app/core/application/interfaces";

export interface ILoginResponse {
  message: string;
  statusCode: number;
  token: string;
  user: IUser;
}
