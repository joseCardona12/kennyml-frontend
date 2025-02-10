import "./groupSelectUser.styles.scss";
import { ISelect } from "@/app/core/application/interfaces";
import { SelectUser } from "@/ui/atoms";

interface IGroupSelectProps {
  label: string;
  id: string;
  name: string;
  options: ISelect[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export default function GroupSelectUser({
  id,
  name,
  options,
  value,
  onChange,
}: IGroupSelectProps): React.ReactNode {
  return (
    <div className="content-selectUser">
      <SelectUser
        id={id}
        name={name}
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
