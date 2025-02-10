import { SectionDashboard } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";

export default function DashboardView() {
  return (
    <DashboardTemplateV2
      section={<SectionDashboard />}
      title_section="Dashboard"
      url_image="/images/avatar_random.jpg"
    />
  );
}
