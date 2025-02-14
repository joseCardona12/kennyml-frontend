import "./selectUser.styles.scss";
import { ISelect } from "@/app/core/application/interfaces";

interface ISelectProps {
  name: string;
  id: string;
  options: ISelect[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export default function SelectUser({
  name,
  id,
  options,
  value,
  onChange,
}: ISelectProps): React.ReactNode {
  return (
    <select
      name={name}
      id={id}
      className="content-selectUser"
      value={value}
      onChange={onChange}
    >
      {options.map((option: ISelect, index: number) => (
        <option value={option.name} key={index}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
