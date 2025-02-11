import { ICodeResponse } from "@/app/core/application/dtos/code.response.dto";
import { UtilApplication } from "../utils";
import { ICodeResponseError } from "@/app/core/application/dtos";
import { ICode } from "@/app/core/application/interfaces";

class CodeService {
  private utilApplication: UtilApplication;

  constructor() {
    this.utilApplication = new UtilApplication(
      "http",
      "localhost",
      "3001",
      "http://localhost:3001/api"
    );
  }

  public async getAllCodes(): Promise<ICodeResponse | ICodeResponseError> {
    try {
      const data = await this.utilApplication.get<
        ICodeResponse | ICodeResponseError
      >("codes");
      console.log("data", data);
      return data;
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }

  public async createCode(
    code: ICode
  ): Promise<ICodeResponse | ICodeResponseError> {
    try {
      const data = await this.utilApplication.post<
        ICodeResponse | ICodeResponseError,
        ICode
      >("codes", code);
      console.log({
        data,
      });
      return data;
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}

const codeService = new CodeService();
export default codeService;
