import {UtilApplication} from "@/app/infrastructure/utils";
import {IResponse, IResponseError} from "@/app/core/application/dtos";
import {ICloudinary} from "@/app/core/application/interfaces";


class CloudinaryService {
    httpClientUtil:UtilApplication;

    constructor() {
        this.httpClientUtil = new UtilApplication(
            "https",
            "kennyml-backend.onrender.com",
            "",
            "https://kennyml-backend.onrender.com/api");
    }

    public async createCloudinary(cloudinary: string):Promise<IResponse<ICloudinary> | IResponseError>{
        try{
            const data = await this.httpClientUtil.post<IResponse<ICloudinary> | IResponseError, {
                file:string,
            }>("cloudinary", {
                file: cloudinary,
            });
            return  data;
        }catch (error:unknown){
            throw error;
        }
    }
}

const service = new CloudinaryService();
export default service;