import {
  ILoginRequest,
  ILoginResponse,
  ILoginResponseError,
  IRegisterRequest,
  IRegisterResponse,
  IRegisterResponseError,
} from "@/app/core/application/dtos";
import { UtilApplication } from "../utils";

class AuthService {
  private utilApplication: UtilApplication;

  constructor() {
    this.utilApplication = new UtilApplication("https", "kennyml-backend.onrender.com", "", "https://kennyml-backend.onrender.com/api");
  }

  public async login(
    request: ILoginRequest
  ): Promise<ILoginResponse | ILoginResponseError> {
    try {
      const data = await this.utilApplication.post<
        ILoginResponse | ILoginResponseError,
        ILoginRequest
      >("auth/login", request);
      console.log({
        message: data,
      });
      return data;
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }

  public async register(
    request: IRegisterRequest
  ): Promise<IRegisterResponse | IRegisterResponseError> {
    try {
      const data = await this.utilApplication.post<
        IRegisterResponse | IRegisterResponseError,
        IRegisterRequest
      >("auth/register", request);
      console.log({
        message: data,
      });
      return data;
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}

const authService = new AuthService();
export default authService;
