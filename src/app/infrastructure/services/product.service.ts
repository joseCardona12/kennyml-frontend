import { IResponse, IResponseError } from "@/app/core/application/dtos";
import { UtilApplication } from "../utils";
import { IProduct } from "@/app/core/application/interfaces";

class ProductService {
  private httpClient: UtilApplication;

  constructor() {
    this.httpClient = new UtilApplication();
  }

  public async getAllProducts(): Promise<
    IResponse<IProduct[]> | IResponseError
  > {
    try {
      const data = await this.httpClient.get<
        IResponse<IProduct[]> | IResponseError
      >("products");
      return data;
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }

  public async createProduct(
    product: Partial<IProduct>
  ): Promise<IResponse<IProduct> | IResponseError> {
    try {
      const data = await this.httpClient.post<
        IResponse<IProduct> | IResponseError,
        Partial<IProduct>
      >("products", product);
      return data;
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }

  public async deleteProduct(
    id: number
  ): Promise<IResponse<number> | IResponseError> {
    try {
      return await this.httpClient.delete(`products/${id}`);
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}

const productService = new ProductService();
export default productService;
