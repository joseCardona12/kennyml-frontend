import "./groupSelect.styles.scss";
import { ISelect } from "@/app/core/application/interfaces";
import { Select } from "@/ui/atoms";

interface IGroupSelectProps {
  label: string;
  id: string;
  name: string;
  options: ISelect[];
  value: "open" | "closed",
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export default function GroupSelect({
  label,
  id,
  name,
  options,
  value,
  onChange,
}: IGroupSelectProps): React.ReactNode {
  return (
    <div className="content-select">
      <label htmlFor="">{label}</label>
      <Select
        id={id}
        name={name}
        options={options}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
