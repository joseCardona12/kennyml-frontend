import { SectionSetting } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";

export default function SettingView() {
  return (
    <DashboardTemplateV2
      section={<SectionSetting />}
      title_section="Settings"
      url_image="/images/avatar_random.jpg"
    />
  );
}
