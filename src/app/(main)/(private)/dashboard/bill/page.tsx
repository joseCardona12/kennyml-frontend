import { SectionBill } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";

export default async function BillView() {


  return (
    <DashboardTemplateV2
      section={<SectionBill />}
      title_section="Bills"
      url_image="/images/avatar_random.jpg"
    />
  );
}
