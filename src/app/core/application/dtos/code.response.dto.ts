import { ICode } from "../interfaces";

export interface ICodeResponse {
  message: string;
  codes: ICode[];
  statusCode: number;
}

