import { IResponse } from "@/app/core/application/dtos";
import { IShopping } from "@/app/core/application/interfaces";
import { ShoppingService } from "@/app/infrastructure/services";
import { SectionShopping } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";

export default async function ShoppingView() {
  const shoppings = await ShoppingService.getAllShoppings();
  if (shoppings.statusCode >= 400) {
    console.error("Error fetching data for ShoppingView");
    return <div>Error loading shoppings data</div>;
  }
  const shoppingData = shoppings as IResponse<IShopping[]>;
  return (
    <DashboardTemplateV2
      section={<SectionShopping shoppings={shoppingData.data} />}
      title_section="Shoppings"
      url_image="/images/avatar_random.jpg"
    />
  );
}
