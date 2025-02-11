import { TextAreaUser } from "@/ui/atoms";
import "./groupTextAreaUser.styles.scss";

interface IGroupTextAreaProps {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  border?: string;
}
export default function GroupTextAreaUser({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
}: IGroupTextAreaProps): React.ReactNode {
  return (
    <div className="content-text-area-user">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <TextAreaUser
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
