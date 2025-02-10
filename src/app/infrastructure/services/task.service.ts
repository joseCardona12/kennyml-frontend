import {
  ITaskRequest,
  ITaskResponse,
  ITaskResponseError,
} from "@/app/core/application/dtos";
import { UtilApplication } from "../utils";
import { TaskPort } from "@/app/core/application/ports";

class TaskService implements TaskPort {
  private utilApplication: UtilApplication;

  constructor() {
    // this.utilApplication = new UtilApplication(
    //   "http",
    //   "kennyml-backend.onrender.com",
    //   "",
    //   "https://kennyml-backend.onrender.com/api"
    // );
    this.utilApplication = new UtilApplication(
      "http",
      "localhost",
      "3001",
      "http://localhost:3001/api"
    );
  }

  public async getAllTasks(): Promise<ITaskResponse | ITaskResponseError> {
    const data = await this.utilApplication.get<
      ITaskResponse | ITaskResponseError
    >("tasks");
    console.log("data", data);
    return data;
  }

  public async createTask(
    taskRequest: ITaskRequest
  ): Promise<ITaskResponse | ITaskResponseError> {
    const data = await this.utilApplication.post<
      ITaskResponse | ITaskResponseError,
      ITaskRequest
    >("tasks", taskRequest);
    console.log("data", data);
    return data;
  }
}

export default new TaskService();
