import { SectionProduct } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";

export default function ProductView() {
  return (
    <DashboardTemplateV2
      section={<SectionProduct />}
      title_section="Products"
      url_image="/images/avatar_random.jpg"
    />
  );
}
