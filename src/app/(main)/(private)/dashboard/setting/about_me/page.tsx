import { SectionAboutMe, SectionEditEmail } from "@/ui/organisms";
import { DashboardTemplateV2 } from "@/ui/templates";

export default function AboutMeView() {
  return (
    <DashboardTemplateV2
      section={<SectionAboutMe />}
      title_section="Information about About Me"
      url_image="/images/avatar_random.jpg"
    />
  );
}
