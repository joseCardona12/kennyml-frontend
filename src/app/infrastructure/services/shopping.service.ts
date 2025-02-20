import { IResponse, IResponseError } from "@/app/core/application/dtos";
import { UtilApplication } from "../utils";
import { IShopping } from "@/app/core/application/interfaces";

class ShoppingService {
  private clientHttp: UtilApplication;

  constructor() {
    this.clientHttp = new UtilApplication(
      "https",
      "kennyml-backend.onrender.com",
      "",
      "https://kennyml-backend.onrender.com/api"
    );
  }

  public async getAllShoppings(): Promise<
    IResponse<IShopping[]> | IResponseError
  > {
    try {
      const data = await this.clientHttp.get<
        IResponse<IShopping[]> | IResponseError
      >("shoppings");
      console.log(data);
      return data;
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}

const shoppingService = new ShoppingService();
export default shoppingService;
