import { IConArrowLeft } from "@/assets/icons";
import { SectionChangePassword } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";

export default function ChangePasswordView() {
  return (
    <DashboardTemplateV2
      section={<SectionChangePassword />}
      title_section=""
      url_image=""
      icon={<IConArrowLeft />}
      url_back="/dashboard/account/security-center"
    />
  );
}
