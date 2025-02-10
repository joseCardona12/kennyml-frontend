import { SectionShopping } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";

export default function ShoppingView() {
  return (
    <DashboardTemplateV2
      section={<SectionShopping />}
      title_section="Shoppings"
      url_image="/images/avatar_random.jpg"
    />
  );
}
