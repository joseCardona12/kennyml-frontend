import { IConArrowLeft } from "@/assets/icons";
import { SectionMyProfile } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";

export default function MyProfileView() {
  return (
    <DashboardTemplateV2
      section={<SectionMyProfile />}
      title_section="My profile"
      url_image=""
      icon={<IConArrowLeft />}
      url_back="/dashboard/account"
    />
  );
}
