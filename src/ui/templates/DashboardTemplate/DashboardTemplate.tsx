"use client";
import { IDataNav } from "@/app/core/application/interfaces";
import "./dashboardTemplate.styles.scss";
import { IconGithub, IconPlus } from "@/assets/icons";
import { IconButton, Title } from "@/ui/atoms";
import { Footer, Navbar, SearchInput } from "@/ui/molecules";
import { CreateTask, DataTask, Header } from "@/ui/organisms";
import { useModalState } from "@/app/core/application/global-state";
// import { useRouter } from "next/navigation";
import { ITaskResponse, ITaskResponseError } from "@/app/core/application/dtos";
import { useItemNav } from "@/app/core/application/global-state/itemNav.state";

interface IDashboardTemplateProps {
  tasks?: ITaskResponse | ITaskResponseError;
}
export default function DashbaordTemplate({ tasks }: IDashboardTemplateProps) {
  const { showModal, setShowModal } = useModalState((state) => state);
  const { itemNavSelect } = useItemNav((state) => state);
  // const router = useRouter();

  const dataTasks = tasks as ITaskResponse;
  const OpenTasks = dataTasks.tasks.filter((task) => task.status_id === "open");
  const ClosedTasks = dataTasks.tasks.filter(
    (task) => task.status_id === "closed"
  );
  const dataNavbar: IDataNav[] = [
    { item_name: "All", count: dataTasks.tasks.length.toString() },
    {
      item_name: "Open",
      count: OpenTasks.length.toString(),
    },
    { item_name: "Closed", count: ClosedTasks.length.toString() },
  ];

  const handleClickButton = (): void => {
    setShowModal(!showModal);
    console.log(showModal, "modal");
  };

  // const handleClickCard = (id: number): void => {
  //   router.push(`dashboard/task/${id}`);
  // };

  return (
    <div className="content-dashboard">
      <Header />
      <main className="dashboard-main">
        <section className="main-section-welcome d-flex-gap-medium">
          <div className="welcome-left">
            <Title text="Hello Kenny!" />
            <Title text="Good Morning" />
          </div>
          <IconButton
            icon={<IconPlus />}
            text="New task"
            onClick={handleClickButton}
          />
        </section>
        <section className="main-section-task">
          <SearchInput />
          <Navbar data={dataNavbar} />
          <DataTask
            dataTasks={
              itemNavSelect === "All"
                ? dataTasks.tasks
                : itemNavSelect === "Open"
                ? OpenTasks
                : ClosedTasks
            }
          />
        </section>
        {showModal && <CreateTask />}
      </main>
      <Footer
        nameCompany="Vardesign"
        city="Medellín"
        department="Antioquia"
        textLink="GO my Github repository"
        url_repository="https://github.com/joseCardona12"
        icon={<IconGithub />}
      />
    </div>
  );
}
