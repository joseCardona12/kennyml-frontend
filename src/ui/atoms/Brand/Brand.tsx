import "./brand.styles.scss";
interface IBrandProps {
  brand: string;
}
export default function Brand({ brand }: IBrandProps): React.ReactNode {
  return (
    <div className="content-brand">
      <h2>{brand}</h2>
    </div>
  );
}
