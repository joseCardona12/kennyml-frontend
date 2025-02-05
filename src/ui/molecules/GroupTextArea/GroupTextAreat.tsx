import { TextArea } from "@/ui/atoms";
import "./groupTextArea.styles.scss";

interface IGroupTextAreaProps {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export default function GroupTextArea({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
}: IGroupTextAreaProps): React.ReactNode {
  return (
    <div className="content-text-area">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <TextArea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
