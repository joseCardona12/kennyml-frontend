import "./textAreaUser.styles.scss";
import React from "react";

interface ITextAreaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  name: string;
  id: string;
  placeholder: string;
  value: string;
  border?: string;
}
export default function TextAreaUser({
  name,
  id,
  placeholder,
  value,
  border,
  ...props
}: ITextAreaProps): React.ReactNode {
  return (
    <textarea
      name={name}
      id={id}
      {...props}
      placeholder={placeholder}
      value={value}
      className="textarea-user"
      style={{ border }}
    ></textarea>
  );
}
