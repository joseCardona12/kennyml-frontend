import { ActionUser } from "@/ui/atoms";
import "./infoNameUser.styles.scss";
import { IActionUser } from "@/app/core/application/interfaces";

interface IInfoNameUserProps {
  data: IActionUser[];
}
export default function InfoNameUser({
  data,
}: IInfoNameUserProps): React.ReactNode {
  return (
    <div className="content-info-name-user">
      {data.map((actionUser: IActionUser, index: number) => (
        <ActionUser
          infoAction={actionUser.infoAction}
          paragraph={actionUser.paragraph}
          title={actionUser.title}
          icon={actionUser.icon}
          borderBottom={actionUser.borderBottom}
          urlPage={actionUser.urlPage}
          key={index}
        />
      ))}
    </div>
  );
}
