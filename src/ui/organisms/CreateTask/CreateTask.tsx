"use client";
import { IconClose } from "@/assets/icons";
import "./createTask.styles.scss";
import {
  GroupInput,
  GroupSelect,
  GroupTextArea,
  inputAlert,
} from "@/ui/molecules";
import { Button } from "@/ui/atoms";
import { ISelect, ITask } from "@/app/core/application/interfaces";
import { useModalState } from "@/app/core/application/global-state";
import { useState } from "react";
import { TaskService } from "@/app/infrastructure/services";
import { ITaskResponse, ITaskResponseError } from "@/app/core/application/dtos";
import { useRouter } from "next/navigation";

export default function CreateTask(): React.ReactNode {
  const { setShowModal } = useModalState((state) => state);
  const router = useRouter();
  const [formDataTask, setFormDataTask] = useState<ITask>({
    title: "",
    description: "",
    start_date: "",
    end_date: "",
    status_id: "open",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value } = e.target;
    console.log(value);

    setFormDataTask({
      ...formDataTask,
      [name]: value,
    });
  };

  const handleCreate = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    console.log("click");
    if (
      !formDataTask.title ||
      !formDataTask.description ||
      !formDataTask.start_date ||
      !formDataTask.end_date ||
      !formDataTask.status_id
    ) {
      inputAlert(
        "All fields are required: title, description, start_date, end_date, status_id",
        "error"
      );
      return;
    }

    if (
      formDataTask.status_id !== "open" &&
      formDataTask.status_id !== "closed"
    ) {
      inputAlert("Invalid status. It must be 'open' or 'closed'", "error");
      return;
    }
    try {
      const taskCreated = await TaskService.createTask(formDataTask);

      if ((taskCreated as ITaskResponseError).message) {
        const taskCreatedError: ITaskResponseError =
          taskCreated as ITaskResponseError;
        inputAlert(taskCreatedError.message, "error");
        return;
      }

      const taskcreatedSuccess: ITaskResponse = taskCreated as ITaskResponse;
      inputAlert(taskcreatedSuccess.message, "success");

      setFormDataTask({
        title: "",
        description: "",
        start_date: "",
        end_date: "",
        status_id: "open",
      });
      router.refresh();
    } catch (error) {
      console.error("Error creating task:", error);
      inputAlert("An unexpected error occurred. Please try again.", "error");
    }
  };
  return (
    <form className="content-create-task" onSubmit={(e) => handleCreate(e)}>
      <div className="task-title">
        <h2 className="title">Create task</h2>
        <span
          className="title-icon"
          onClick={() =>
            setShowModal({
              state: true,
              message: "",
              statusCode: 0,
            })
          }
        >
          <IconClose />
        </span>
      </div>
      <div className="task-info">
        <GroupInput
          label="Title"
          name="title"
          placeholder=""
          onChange={(e) => handleChange(e)}
          icon={<></>}
          value={formDataTask.title}
          type="text"
          error=""
        />

        <GroupTextArea
          id="description"
          label="Description"
          name="description"
          placeholder=""
          value={formDataTask.description}
          onChange={(e) => handleChange(e)}
        />
        <GroupInput
          label="Start date"
          name="start_date"
          placeholder=""
          onChange={(e) => handleChange(e)}
          icon={<></>}
          value={formDataTask.start_date}
          type="date"
          error=""
        />

        <GroupInput
          label="End date"
          name="end_date"
          placeholder=""
          onChange={(e) => handleChange(e)}
          icon={<></>}
          value={formDataTask.end_date}
          type="date"
          error=""
        />
        {/* <GroupSelect
          id=""
          name="status_id"
          label="Status"
          options={dataSelect}
          value={formDataTask.status_id}
          onChange={(e) => handleChange(e)}
        /> */}
        <Button text="Create" type="submit" />
      </div>
    </form>
  );
}
