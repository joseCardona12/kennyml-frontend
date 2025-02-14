import { IResponse, IResponseError } from "@/app/core/application/dtos";
import { UtilApplication } from "../utils";
import { IPlace, IStatus } from "@/app/core/application/interfaces";

class StatusService {
  private httpClient: UtilApplication;
  constructor() {
    this.httpClient = new UtilApplication(
      "https",
      "kennyml-backend.onrender.com",
      "",
      "https://kennyml-backend.onrender.com/api"
    );
  }

  public async getAllStatus(): Promise<IResponse<IStatus[]> | IResponseError> {
    try {
      const data = await this.httpClient.get<
        IResponse<IStatus[]> | IResponseError
      >("status");
      return data;
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}

const statusService = new StatusService();
export default statusService;
