import { SectionBook } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";

export default function BookView() {
  return (
    <DashboardTemplateV2
      section={<SectionBook />}
      title_section="Books"
      url_image="/images/avatar_random.jpg"
    />
  );
}
