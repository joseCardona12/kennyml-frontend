import { SectionAccount } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";

export default function AccountView() {
  return (
    <DashboardTemplateV2
      section={<SectionAccount />}
      title_section="Account"
      url_image="/images/avatar_random.jpg"
    />
  );
}
