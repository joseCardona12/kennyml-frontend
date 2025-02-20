import {IResponse, IResponseError} from "@/app/core/application/dtos";
import {IProduct, IShopping} from "@/app/core/application/interfaces";
import { ShoppingService, ProductService } from "@/app/infrastructure/services";
import { SectionShopping } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";

export default async function ShoppingView() {
  const shoppings = await ShoppingService.getAllShoppings();
  const products: IResponse<IProduct[]> | IResponseError = await ProductService.getAllProducts();
  if (shoppings.statusCode >= 400 || products.statusCode >= 400) {
    console.error("Error fetching data for ShoppingView");
    return <div>Error loading shoppings data</div>;
  }
  const shoppingData = shoppings as IResponse<IShopping[]>;
  const productData = products as IResponse<IProduct[]>;
  return (
    <DashboardTemplateV2
      section={<SectionShopping shoppings={shoppingData.data} products={productData.data} />}
      title_section="Shoppings"
      url_image="/images/avatar_random.jpg"
    />
  );
}
