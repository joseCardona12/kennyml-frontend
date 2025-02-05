import "./navbar.styles.scss";
import { IDataNav } from "@/app/core/application/interfaces";
import { ItemNav } from "@/ui/atoms";
interface INavbarProps {
  data: IDataNav[];
}
export default function Navbar({ data }: INavbarProps): React.ReactNode {
  return (
    <ul className="content-item">
      {data.map((item: IDataNav, index: number) => (
        <ItemNav item_name={item.item_name} count={item.count} key={index} />
      ))}
    </ul>
  );
}
