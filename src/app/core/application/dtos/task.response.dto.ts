import { ITask } from "@/app/core/application/interfaces";

export interface ITaskResponse {
  message: string;
  tasks: ITask[];
  code: number;
}
