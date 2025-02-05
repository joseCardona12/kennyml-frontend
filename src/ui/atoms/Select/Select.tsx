import "./select.styles.scss";
import { ISelect } from "@/app/core/application/interfaces";

interface ISelectProps {
  name: string;
  id: string;
  options: ISelect[];
  value: "open" | "closed";
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export default function Select({
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
      className="content-select"
      value={value}
      onChange={onChange}
    >
      {options.map((option: ISelect, index: number) => (
        <option value={option.value} key={index}>
          {option.text}
        </option>
      ))}
    </select>
  );
}
