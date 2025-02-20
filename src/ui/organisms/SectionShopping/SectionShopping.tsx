import { IShopping } from "@/app/core/application/interfaces";
import { Card } from "@/ui/molecules";
import Image from "next/image";
import "./sectionShopping.styles.scss";

interface ISectionShoppingProps {
  shoppings: IShopping[];
}
export default function SectionShopping({
  shoppings,
}: ISectionShoppingProps): React.ReactNode {
  console.log("shoppings", shoppings);
  return (
    <div className="section-shopping">
      {shoppings.map((shopping: IShopping, index: number) => (
        <Card
          key={index}
          title={`Price ${shopping.price}`}
          paragraph={`Product No ${shopping.product_id}`}
        />
      ))}
    </div>
  );
}
