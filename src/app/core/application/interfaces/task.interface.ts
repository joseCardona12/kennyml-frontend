export interface ITask {
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  status_id: "open" | "closed";
}
