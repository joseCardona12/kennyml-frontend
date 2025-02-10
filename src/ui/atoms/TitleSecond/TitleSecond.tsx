import "./titleSecond.styles.scss";

interface ITitleProps {
  text: string;
}
export default function TitleSecond({ text }: ITitleProps): React.ReactNode {
  return <h4 className="title">{text}</h4>;
}
