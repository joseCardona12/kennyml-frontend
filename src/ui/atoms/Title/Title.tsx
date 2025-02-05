import "./title.styles.scss";

interface ITitleProps {
  text: string;
}
export default function Title({ text }: ITitleProps): React.ReactNode {
  return <h2 className="title">{text}</h2>;
}
