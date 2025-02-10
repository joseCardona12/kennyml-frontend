import { SectionEditEmail } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";

export default function SettingEmailView() {
  return (
    <DashboardTemplateV2
      section={<SectionEditEmail />}
      title_section="Information about Email"
      url_image="/images/avatar_random.jpg"
    />
  );
}
