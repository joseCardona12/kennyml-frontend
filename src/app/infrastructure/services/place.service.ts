import { IResponse, IResponseError } from "@/app/core/application/dtos";
import { UtilApplication } from "../utils";
import { IPlace } from "@/app/core/application/interfaces";

class PlaceService {
  private httpClient: UtilApplication;
  constructor() {
    this.httpClient = new UtilApplication(
      "https",
      "kennyml-backend.onrender.com",
      "",
      "https://kennyml-backend.onrender.com/api"
    );
  }

  public async getAllPlaces(): Promise<IResponse<IPlace[]> | IResponseError> {
    try {
      const data = await this.httpClient.get<
        IResponse<IPlace[]> | IResponseError
      >("places");
      return data;
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}

const placeService = new PlaceService();
export default placeService;
