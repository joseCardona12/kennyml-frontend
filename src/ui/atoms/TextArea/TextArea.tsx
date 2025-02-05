import "./textArea.styles.scss";
import React from "react";

interface ITextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  name: string;
  id: string;
  placeholder: string;
  value: string;
}
export default function TextArea({
  name,
  id,
  placeholder,
  value,
  ...props
}: ITextAreaProps): React.ReactNode {
  return (
    <textarea
      name={name}
      id={id}
      {...props}
      placeholder={placeholder}
      value={value}
      className="textarea"
    ></textarea>
  );
}
