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
  width:string,
}
export default function GroupSelectUser({
  id,
  name,
  options,
  value,
  onChange,
  width = "20%"
}: IGroupSelectProps): React.ReactNode {
  return (
    <div className="content-selectUser" style={{width}}>
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
