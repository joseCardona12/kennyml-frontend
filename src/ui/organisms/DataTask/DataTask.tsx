"use client";
import { Title } from "@/ui/atoms";
import "./dataTask.styles.scss";
import { ITask } from "@/app/core/application/interfaces";
import { CardTask } from "@/ui/molecules";
import { useItemNav } from "@/app/core/application/global-state/itemNav.state";

interface IDataTaskProps {
  dataTasks: ITask[];
}
export default function DataTask({
  dataTasks,
}: IDataTaskProps): React.ReactNode {
  const { itemNavSelect } = useItemNav((state) => state);
  return (
    <div className="task-content">
      <Title text="Tasks" />
      {dataTasks.length ? (
        dataTasks.map((task: ITask, index: number) => (
          <CardTask
            title_card={task.title}
            description_card={task.description}
            start_date={task.start_date}
            end_date={task.end_date}
            onClick={() => console.log("tasks")}
            status_id={task.status_id}
            key={index}
          />
        ))
      ) : (
        <p className="task-info-data">
          There are not tasks with state: {itemNavSelect}
        </p>
      )}
    </div>
  );
}
