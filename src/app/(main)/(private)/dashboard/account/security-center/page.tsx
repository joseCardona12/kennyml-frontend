import { IConArrowLeft } from "@/assets/icons";
import { SectionSecurityCenter } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";

export default function SecurityCenter() {
  return (
    <DashboardTemplateV2
      section={<SectionSecurityCenter />}
      title_section="Security Center"
      url_image=""
      icon={<IConArrowLeft />}
      url_back="/dashboard/account"
    />
  );
}
