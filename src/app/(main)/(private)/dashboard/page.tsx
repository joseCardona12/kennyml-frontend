import { TaskService } from "@/app/infrastructure/services";
import { DashboardTemplate } from "@/ui/templates";

export default async function DashboardView() {
  const tasks = await TaskService.getAllTasks();
  return <DashboardTemplate tasks={tasks} />;
}
