import { ITwilioRequest, ITwilioResponse } from "@/app/core/application/dtos";
import { UtilApplication } from "../utils";

class TwilioService {
  private utilApplication: UtilApplication;

  constructor() {
    this.utilApplication = new UtilApplication();
  }
  public async sendMessageTwilio(
    request: ITwilioRequest
  ): Promise<ITwilioResponse> {
    try {
      const data = await this.utilApplication.post<
        ITwilioResponse,
        ITwilioRequest
      >("sms", request);
      console.log({
        message: data,
      });
      return data;
    } catch (error: unknown) {
      throw new Error(`${error}`);
    }
  }
}

const twilioService = new TwilioService();
export default twilioService;
