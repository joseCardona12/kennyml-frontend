import { IResponse, IResponseError } from "@/app/core/application/dtos";
import { UtilApplication } from "../utils";
import { IPlace, IUnit } from "@/app/core/application/interfaces";

class UnitService {
  private httpClient: UtilApplication;
  constructor() {
    this.httpClient = new UtilApplication(
      "https",
      "kennyml-backend.onrender.com",
      "",
      "https://kennyml-backend.onrender.com/api"
    );
  }

  public async getAllUnits(): Promise<IResponse<IUnit[]> | IResponseError> {
    try {
      const data = await this.httpClient.get<
        IResponse<IUnit[]> | IResponseError
      >("units");
      return data;
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}

const unitService = new UnitService();
export default unitService;
