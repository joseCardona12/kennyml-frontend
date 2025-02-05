import { ITaskRequest, ITaskResponse, ITaskResponseError } from "@/app/core/application/dtos";

export interface TaskPort{
    getAllTasks():Promise<ITaskResponse | ITaskResponseError>
    createTask(taskRequest:ITaskRequest):Promise<ITaskResponse | ITaskResponseError>
}